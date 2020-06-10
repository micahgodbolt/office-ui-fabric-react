import * as React from 'react';
import { INavPage, LoadingComponent } from '@uifabric/example-app-base/lib/index2';
import { getStartedPagesWeb } from './web';

export const GetStartedPages: INavPage = {
  title: 'Get started',
  url: '#/get-started',
  isUhfLink: true,
  hasPlatformPicker: true,
  component: () => <LoadingComponent title="Get started" />,
  getComponent: cb =>
    require.ensure([], require =>
      cb(require<any>('../../../pages/Overviews/GetStartedPage/GetStartedPage').GetStartedPage),
    ),
  platforms: {
    web: getStartedPagesWeb,
    ios: [
      {
        title: 'Get started',
        url: '#/get-started/ios',
        isHiddenFromMainNav: true,
        component: () => <LoadingComponent title="Get started" />,
        getComponent: cb =>
          require.ensure([], require =>
            cb(require<any>('../../../pages/Overviews/GetStartedPage/GetStartedPage').GetStartedPage),
          ),
      },
    ],
    android: [
      {
        title: 'Get started',
        url: '#/get-started/android',
        isHiddenFromMainNav: true,
        component: () => <LoadingComponent title="Get started" />,
        getComponent: cb =>
          require.ensure([], require =>
            cb(require<any>('../../../pages/Overviews/GetStartedPage/GetStartedPage').GetStartedPage),
          ),
      },
    ],
    mac: [
      {
        title: 'Get started',
        url: '#/get-started/mac',
        isHiddenFromMainNav: true,
        component: () => <LoadingComponent title="Get started" />,
        getComponent: cb =>
          require.ensure([], require =>
            cb(require<any>('../../../pages/Overviews/GetStartedPage/GetStartedPage').GetStartedPage),
          ),
      },
    ],
    windows: [
      {
        title: 'Get started',
        url: '#/get-started/windows',
        isHiddenFromMainNav: true,
        component: () => <LoadingComponent title="Get started" />,
        getComponent: cb =>
          require.ensure([], require =>
            cb(require<any>('../../../pages/Overviews/GetStartedPage/GetStartedPage').GetStartedPage),
          ),
      },
    ],
    cross: [
      {
        title: 'Get started',
        url: '#/get-started/crossplatform',
        isHiddenFromMainNav: true,
        component: () => <LoadingComponent title="Get started" />,
        getComponent: cb =>
          require.ensure([], require =>
            cb(require<any>('../../../pages/Overviews/GetStartedPage/GetStartedPage').GetStartedPage),
          ),
      },
    ],
  },
};
