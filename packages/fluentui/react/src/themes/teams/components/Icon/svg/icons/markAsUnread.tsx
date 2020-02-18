import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
          <path d="M9.075 19.704c.243.068.569.142.975.199l.921-.92a7.677 7.677 0 0 1-1.627-.242.489.489 0 0 1-.344-.476V15.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v.453l.909-.909A1.488 1.488 0 0 0 13.5 14h-2.793l3.147-3.146a.5.5 0 1 0-.708-.708L9.27 14.023A1.498 1.498 0 0 0 8 15.5v2.765c0 .67.442 1.262 1.075 1.44zM15.848 11.44a.501.501 0 0 0 .628-.326c.082-.261.34-.48.657-.558.366-.09.735.02 1.013.298l.477.476.707-.707-.476-.477a2.062 2.062 0 0 0-1.958-.561c-.66.161-1.186.632-1.375 1.228a.5.5 0 0 0 .327.627zM22.73 14.023L20.707 12l3.147-3.146a.5.5 0 1 0-.708-.708l-15 15a.5.5 0 1 0 .708.708l3.933-3.934a8.07 8.07 0 0 0 1.138-.216A1.491 1.491 0 0 0 15 18.264v-.557l1.614-1.614c.164.053.294.118.386.173v1.999c0 .67.441 1.261 1.075 1.44.705.195 1.522.295 2.425.295s1.72-.1 2.426-.296A1.492 1.492 0 0 0 24 18.264V15.5c0-.748-.552-1.365-1.27-1.477zM20 12.707L21.293 14h-2.586L20 12.707zm3 5.558a.49.49 0 0 1-.343.476c-.425.118-1.144.259-2.157.259s-1.732-.14-2.156-.259a.489.489 0 0 1-.344-.476V15.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2.765z" />
        </g>
        <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
          <path d="M10.05 19.903a7.607 7.607 0 0 1-.975-.199A1.491 1.491 0 0 1 8 18.264V15.5c0-.748.552-1.365 1.27-1.477l3.876-3.877a.5.5 0 1 1 .708.708L10.707 14H13.5c.665 0 1.213.444 1.409 1.044l-4.859 4.859zM15.848 11.44a.501.501 0 0 0 .628-.326c.082-.261.34-.48.657-.558.366-.09.735.02 1.013.298l.477.476.707-.707-.476-.477a2.062 2.062 0 0 0-1.958-.561c-.66.161-1.186.632-1.375 1.228a.5.5 0 0 0 .327.627zM22.73 14.023L20.707 12l3.147-3.146a.5.5 0 1 0-.708-.708l-15 15a.5.5 0 1 0 .708.708l3.933-3.934a8.07 8.07 0 0 0 1.138-.216A1.491 1.491 0 0 0 15 18.264v-.557l1.614-1.614c.164.053.294.118.386.173v1.999c0 .67.441 1.261 1.075 1.44.705.195 1.522.295 2.425.295s1.72-.1 2.426-.296A1.492 1.492 0 0 0 24 18.264V15.5c0-.748-.552-1.365-1.27-1.477zM20 12.707L21.293 14h-2.586L20 12.707z" />
        </g>
      </g>
    </svg>
  ),
  styles: {}
} as TeamsSvgIconSpec;
