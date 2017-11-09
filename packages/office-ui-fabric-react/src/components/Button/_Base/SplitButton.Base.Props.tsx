import * as React from 'react';
import { IMenuButtonProps, IMenuButton } from './MenuButton.Base.Props';
import { IRenderFunction } from '../../../Utilities';

export interface ISplitButton extends IMenuButton {

}

export interface ISplitButtonProps extends IMenuButtonProps {
  /**
   * Optional callback to access the IButton interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: ISplitButton) => void;

  /**
   * If set to true, and if menuProps and onClick are provided, the button will render as a SplitButton. Defaults to false.
   */
  split?: boolean;

  /**
   * If set to true and if this is a splitButton (split == true) then the primary action of a split button is disabled.
   */
  primaryDisabled?: boolean;

}