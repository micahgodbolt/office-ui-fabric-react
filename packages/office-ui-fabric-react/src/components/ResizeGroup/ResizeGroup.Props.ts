import * as React from 'react';
import { IResizeGroupState } from './ResizeGroup';

export interface IResizeGroupProps<T> extends React.Props<IResizeGroupState<T>> {
  onRender: <T>(props: T) => JSX.Element;
  onReduce: <T>(currentProps: T) => T;
}