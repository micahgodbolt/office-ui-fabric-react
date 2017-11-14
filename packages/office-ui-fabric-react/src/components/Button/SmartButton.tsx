import * as React from 'react';
import {
  BaseComponent,
  getNativeProps
} from '../../Utilities';
import { ButtonBase } from './_base/Button.base';
import { IButtonBaseProps } from './_base/Button.base.types';
import { MenuButtonBase } from './_base/MenuButton.base';
import { IMenuButtonBaseProps } from './_base/MenuButton.base.types';
import { SplitButtonBase } from './_base/SplitButton.base';
import { ISplitButtonBaseProps } from './_base/SplitButton.base.types';

export class BaseButton extends BaseComponent<ISplitButtonBaseProps, {}> {

  public render(): JSX.Element {
    const isSplit = !!this.props.menuProps && !!this.props.onClick && this.props.split;

    if (isSplit) {
      return (
        <SplitButtonBase {...this.props } />
      );
    } else if (this.props.menuProps) {
      return (
        <MenuButtonBase {...this.props as IMenuButtonBaseProps} />
      );
    } else {
      return (
        <ButtonBase {...this.props as IButtonBaseProps } />
      );
    }

  }

}