import { configure } from '@kadira/storybook';

const req = require.context('../src/components', true, /.Stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);