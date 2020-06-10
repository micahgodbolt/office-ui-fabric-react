import * as React from 'react';
import { INavPage, LoadingComponent } from '@uifabric/example-app-base/lib/index2';

export const getStartedPagesWeb: INavPage[] = [
  {
    title: 'Get started',
    url: '#/get-started/web',
    isHiddenFromMainNav: false,
    component: () => <LoadingComponent title="Get started" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../../pages/Overviews/GetStartedPage/GetStartedPage').GetStartedPage),
      ),
  },
  {
    title: 'Theming',
    isCategory: true,
    pages: [
      {
        title: 'Creating themes',
        url: '#/get-started/web/customizing-components',
        isHiddenFromMainNav: false,
        component: () => <LoadingComponent title="Customizing Components" />,
        getComponent: cb =>
          require.ensure([], require =>
            cb(require<any>('../../../pages/GetStarted/web/CustomizingComponents').CustomizingComponents),
          ),
      },
      {
        title: 'Customizing components',
        url: '#/get-started/web/customizing-components',
        isHiddenFromMainNav: false,
        component: () => <LoadingComponent title="Customizing Components" />,
        getComponent: cb =>
          require.ensure([], require =>
            cb(require<any>('../../../pages/GetStarted/web/CustomizingComponents').CustomizingComponents),
          ),
      },
    ],
  },
];
