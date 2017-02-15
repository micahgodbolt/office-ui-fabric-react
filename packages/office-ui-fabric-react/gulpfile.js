'use strict';

let build = require('@microsoft/web-library-build');
let serial = build.serial;
let buildConfig = build.getConfig();
let gulp = require('gulp');
let configFile = "./ftpconfig.json";
let fs = require('fs');
let path = require('path');
let theo = require('theo');
let _ = require('underscore');

let isProduction = process.argv.indexOf('--production') >= 0;
let isNuke = process.argv.indexOf('nuke') >= 0;
let packageFolder = buildConfig.packageFolder || '';
let distFolder = buildConfig.distFolder;

// Configure custom lint overrides.
build.tslint.setConfig({ lintConfig: require('./tslint.json') });

// Configure TypeScript 2.0.
build.typescript.setConfig({ typescript: require('typescript') });

// Use css modules.
build.sass.setConfig({ useCSSModules: true });

// Disable unnecessary subtasks.
build.preCopy.isEnabled = () => false;
build.postCopy.isEnabled = () => isProduction;

// Until typings work.
//build.apiExtractor.isEnabled = () => false;

// Copy fabric-core to dist to be published with fabric-react.
build.postCopy.setConfig({
  copyTo: {
    [path.join(distFolder, 'sass')]: [
      'node_modules/office-ui-fabric-core/dist/sass/*.*'
    ],
    [path.join(distFolder, 'css')]: [
      'node_modules/office-ui-fabric-core/dist/css/*.*'
    ]
  }
});

// process *.Props.tsx as text.
build.text.setConfig({ textMatch: ['src/**/*.Props.ts'] });

// Produce AMD bits in lib-amd on production builds.
if (isProduction || isNuke) {
  build.setConfig({
    libAMDFolder: path.join(packageFolder, 'lib-amd')
  });
}

// Disable certain subtasks in non production builds to speed up serve.
build.tslint.isEnabled = () => isProduction;
build.webpack.isEnabled = () => isProduction;
build.clean.isEnabled = () => isProduction;

// Short aliases for subtasks.
build.task('webpack', build.webpack);
build.task('tslint', build.tslint);
build.task('ts', build.typescript);

// initialize tasks.
build.initialize(gulp);

gulp.task('theo', function () {

  // override scss format to remove the kebab-case transformation
  theo.registerFormat('scss', (json) =>
    Object.keys(json.props).map(prop =>
      _.compact([
        (json.props[prop].comment ? `// ${json.props[prop].comment}` : ''),
        `$${json.props[prop].name}: ${json.props[prop].value};`
      ]).join('\n')
    ).join('\n'));

  let gutil = require('gulp-util');
  gulp.src('src/components/**/*.Tokens.yml')
    .pipe(theo.plugins.transform('web', {
      includeRawValue: true,
      // Preprocess JSON to turn nested props into flat props
      jsonPreProcess: json => {
        let resolveNestedProps = (props, parent = "") => {
          let flatProps = {};
          _.forEach(props, (value, key) => {
            if (typeof value == 'object') {
              let propName = (parent === "" ? "" : parent + "-") + key
              flatProps = Object.assign(flatProps, resolveNestedProps(value, propName))
              if (value.value) {
                flatProps[propName] = value
              }
            }
          })
          return flatProps;
        }
        json.props = resolveNestedProps(json.props);
        return json;
      }
    }))
    .pipe(theo.plugins.format('scss', {
      propsMap: function (prop) {
        var theme;
        // remove the {! } around raw value so that clean key can be passed through
        if (prop['.rawValue'].startsWith('{!')) {
          theme = prop['.rawValue'].replace(/[{!}]/g, '');
        }
        else {
          theme = prop.name;
          gutil.log(`Gulp: ${prop.name} is missing a theme variable. Do not use raw hex values in component tokens.`);
        }
        // Turn on when supporting slot values
        //prop.value = `"[slot: ${prop.name}, theme: ${theme} default: ${prop.value}]"`;
        prop.value = `"[theme: ${theme}, default: ${prop.value}]"`;
        return prop;
      }
    }))
    .pipe(gulp.dest('src/components'));
});