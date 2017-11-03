/* tslint:disable:no-any */
import * as React from 'react';
import { Accordion } from './BaseAccordion';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
// import { IStyle } from '../../Styling';

export interface IAccordion {
}

export interface IAccordionProps extends React.Props<Accordion> {
  /**
  * All props for your component are to be defined here.
  */
  componentRef?: (component: IAccordion) => void;

  buttonProps?: IButtonProps;
  onRenderContent?: (props?: IAccordionProps) => JSX.Element;
  isSplit?: boolean;
}
