// tslint:disable:max-line-length

import { registerIcons } from '@uifabric/styling/lib/index';

export function initializeIcons(baseUrl: string = ''): void {
  registerIcons({
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-7"`,
      src: `url('data:application/octet-stream;base64,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') format('woff')`, 
    },
    icons: {
      'PageCheckedOut': '\uF02C',
      'SaveAndClose': '\uF038',
      'Script': '\uF03A',
      'Archive': '\uF03F',
      'ActivityFeed': '\uF056',
      'EventDate': '\uF059',
      'CaretRight': '\uF06B',
      'SetAction': '\uF071',
      'CaretSolidLeft': '\uF08D',
      'CaretSolidDown': '\uF08E',
      'CaretSolidRight': '\uF08F',
      'CaretSolidUp': '\uF090',
      'PowerAppsLogo': '\uF091',
      'PowerApps2Logo': '\uF092',
      'SearchIssue': '\uF09A',
      'SearchIssueMirrored': '\uF09B',
      'FabricAssetLibrary': '\uF09C',
      'FabricDataConnectionLibrary': '\uF09D',
      'FabricDocLibrary': '\uF09E',
      'FabricFormLibrary': '\uF09F',
      'FabricFormLibraryMirrored': '\uF0A0',
      'FabricReportLibrary': '\uF0A1',
      'FabricReportLibraryMirrored': '\uF0A2',
      'FabricPublicFolder': '\uF0A3',
      'FabricFolderSearch': '\uF0A4',
      'FabricMovetoFolder': '\uF0A5',
      'FabricUnsyncFolder': '\uF0A6',
      'FabricSyncFolder': '\uF0A7',
      'FabricOpenFolderHorizontal': '\uF0A8',
      'FabricFolder': '\uF0A9',
      'FabricFolderFill': '\uF0AA',
      'FabricNewFolder': '\uF0AB',
      'FabricPictureLibrary': '\uF0AC',
      'AddFavorite': '\uF0C8',
      'AddFavoriteFill': '\uF0C9',
      'BufferTimeBefore': '\uF0CF',
      'BufferTimeAfter': '\uF0D0',
      'BufferTimeBoth': '\uF0D1',
      'CannedChat': '\uF0F2',
      'SkypeForBusinessLogo': '\uF0FC',
      'PageCheckedin': '\uF104',
      'CaretBottomLeftSolid8': '\uF121',
      'CaretBottomRightSolid8': '\uF122',
      'FolderHorizontal': '\uF12B',
      'MicrosoftStaffhubLogo': '\uF130',
      'GiftboxOpen': '\uF133',
      'StatusCircleOuter': '\uF136',
      'StatusCircleInner': '\uF137',
      'ExploreContentSingle': '\uF164',
      'CollapseContent': '\uF165',
      'CollapseContentSingle': '\uF166',
      'InfoSolid': '\uF167',
      'ProgressRingDots': '\uF16A',
      'CaloriesAdd': '\uF172',
      'BranchFork': '\uF173',
      'HardDriveGroup': '\uF18F',
      'BucketColor': '\uF1B6',
      'BucketColorFill': '\uF1B7',
      'Taskboard': '\uF1C2',
      'SingleColumn': '\uF1D3',
      'DoubleColumn': '\uF1D4',
      'TripleColumn': '\uF1D5',
      'ColumnLeftTwoThirds': '\uF1D6',
      'ColumnRightTwoThirds': '\uF1D7',
      'AccessLogoFill': '\uF1DB',
      'AnalyticsLogo': '\uF1DE',
      'AnalyticsQuery': '\uF1DF',
      'NewAnalyticsQuery': '\uF1E0',
      'AnalyticsReport': '\uF1E1',
      'WordLogo': '\uF1E3',
      'WordLogoFill': '\uF1E4',
      'ExcelLogo': '\uF1E5',
      'ExcelLogoFill': '\uF1E6',
      'OneNoteLogo': '\uF1E7',
      'OneNoteLogoFill': '\uF1E8',
      'OutlookLogo': '\uF1E9',
      'OutlookLogoFill': '\uF1EA',
      'PowerPointLogo': '\uF1EB',
      'PowerPointLogoFill': '\uF1EC',
      'PublisherLogo': '\uF1ED',
      'PublisherLogoFill': '\uF1EE',
      'ScheduleEventAction': '\uF1EF',
      'FlameSolid': '\uF1F3',
      'ServerProcesses': '\uF1FE',
      'Server': '\uF201',
      'SaveAll': '\uF203',
      'LinkedInLogo': '\uF20A',
      'SidePanelMirrored': '\uF221',
      'ProtectRestrict': '\uF22A',
      'GridViewSmall': '\uF232',
      'GridViewMedium': '\uF233',
      'GridViewLarge': '\uF234',
      'Step': '\uF241',
      'StepInsert': '\uF242',
      'StepShared': '\uF243',
      'StepSharedAdd': '\uF244',
      'StepSharedInsert': '\uF245',
      'ViewDashboard': '\uF246',
      'ViewList': '\uF247',
      'ViewListGroup': '\uF248'
    }
  });
}
