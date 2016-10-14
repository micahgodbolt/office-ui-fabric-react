import * as React from 'react';
import { IContextualMenuItem } from '../ContextualMenu/index';

export interface ICommandList {

}

export interface ICommandListProps extends React.HTMLProps<HTMLDivElement> {

  /**
   * Items to render
   */
  items: IContextualMenuItem[];

  /**
   * Text to be read by screen readers if there are overflow items and focus is on elipsis button
   */
  elipisisAriaLabel?: string;

  /**
   * Additional css class to apply to the command list
   * @defaultvalue undefined
   */
  className?: string;
}