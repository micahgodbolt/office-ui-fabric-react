import * as React from 'react';
import { OverflowSet } from './OverflowSet';
import { IContextualMenuItem } from '../../ContextualMenu';

export interface IOverflowSetProps extends React.Props<OverflowSet> {
  items?: any[];
  overflowItems?: IContextualMenuItem[];
  overflowIcon?: string;

  /** Method to call when trying to render an item. */
  onRenderItem?: (item?: any, index?: number) => React.ReactNode;
}
