import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import { Markdown, IPageSectionProps, IPageProps, Page } from '@uifabric/example-app-base/lib/index2';
import * as styles from './CustomizingComponentsPage.module.scss';
import { getSubTitle } from '../../../../utilities/index';
import { Platforms } from '../../../../interfaces/Platforms';

const baseUrl =
  'https://github.com/microsoft/fluentui/tree/master/apps/fabric-website/src/pages/Styles/ElevationPage/docs';

export const CustomizingComponents: React.FunctionComponent<IPageProps> = props => {
  return (
    <Page
      {...props}
      title={'Customizing Components'}
      subTitle={getSubTitle(Platforms.web)}
      otherSections={_otherSections()}
    />
  );
};

function _otherSections(): IPageSectionProps[] {
  return [
    {
      sectionName: '',
      jumpLinks: [],
      content: (
        <>
          <Markdown>
            {
              require('!raw-loader!@uifabric/fabric-website/src/pages/GetStarted/web/CustomizingComponents/docs/CustomizingComponents.md') as string
            }
          </Markdown>
        </>
      ),
    },
  ];
}
