import * as React from 'react';
import { IButtonBaseProps, IButtonBase } from './Button.Base.Props';
import { IRenderFunction } from '../../../Utilities';
import { IContextualMenuProps } from '../../ContextualMenu';

export interface IMenuButton extends IButtonBase {
  /**
   * If there is a menu associated with this button and it is visible, this will dismiss the menu
   */
  dismissMenu: () => void;
}

export interface IMenuButtonProps extends IButtonBaseProps {
  /**
   * Optional callback to access the IButton interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IMenuButton) => void;

  /**
   * Props for button menu. Providing this will default to showing the menu icon. See menuIconProps for overriding
   * how the default icon looks. Providing this in addition of onClick and setting the split property to true will render a SplitButton.
   */
  menuProps?: IContextualMenuProps;

  /**
   * Optional callback when menu is clicked.
   */
  onMenuClick?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, button?: IMenuButtonProps) => void;

  /**
  * Custom render function for button menu
  */
  onRenderMenu?: IRenderFunction<IContextualMenuProps>;

  /**
 * Any custom data the developer wishes to associate with the menu item.
 */
  data?: any;
}