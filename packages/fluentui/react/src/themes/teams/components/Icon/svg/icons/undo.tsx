import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svgFlippingInRtl}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M22.2344,14.7344c-0.2393-0.4062-0.5273-0.7773-0.8633-1.1133s-0.707-0.6235-1.1133-0.8633
          C19.3877,12.2529,18.4658,12,17.4922,12H10.707l2.1465-2.1465c0.1953-0.1953,0.1953-0.5117,0-0.707s-0.5117-0.1953-0.707,0l-3,3
          c-0.1953,0.1953-0.1953,0.5117,0,0.707l3,3C12.2441,15.9512,12.3721,16,12.5,16s0.2559-0.0488,0.3535-0.1465
          c0.1953-0.1953,0.1953-0.5117,0-0.707L10.707,13h6.7852c0.6045,0,1.1807,0.1162,1.7305,0.3477
          c0.5498,0.2319,1.0322,0.5562,1.4492,0.9727c0.417,0.417,0.7412,0.8999,0.9727,1.4492c0.2314,0.5498,0.3477,1.1265,0.3477,1.7305
          c0,0.6045-0.1172,1.1807-0.3516,1.7305s-0.5576,1.0303-0.9688,1.4414c-0.417,0.417-0.8994,0.7422-1.4492,0.9766
          S18.0967,22,17.4922,22c-0.1357,0-0.2529,0.0498-0.3516,0.1484s-0.1484,0.2158-0.1484,0.3516s0.0498,0.2529,0.1484,0.3516
          S17.3564,23,17.4922,23c0.9736,0,1.8955-0.2529,2.7656-0.7578c0.4062-0.2393,0.7773-0.5273,1.1133-0.8633s0.624-0.71,0.8633-1.1211
          c0.2451-0.417,0.4326-0.8584,0.5625-1.3242s0.1953-0.9434,0.1953-1.4336C22.9922,16.5264,22.7393,15.6045,22.2344,14.7344z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M17,11h-4.5859l1.293-1.293c0.3906-0.3906,0.3906-1.0234,0-1.4141s-1.0234-0.3906-1.4141,0l-3,3
          c-0.3906,0.3906-0.3906,1.0234,0,1.4141l3,3C12.4883,15.9023,12.7441,16,13,16s0.5117-0.0977,0.707-0.293
          c0.3906-0.3906,0.3906-1.0234,0-1.4141L12.4141,13H17c0.1631,0,4,0.0454,4,4c0,3.8525-3.5947,3.9961-4,4c-0.5522,0-1,0.4473-1,1
          s0.4478,1,1,1c2.0752,0,6-1.2539,6-6S19.0752,11,17,11z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
