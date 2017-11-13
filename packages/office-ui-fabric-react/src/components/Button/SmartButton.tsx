import * as React from 'react';
import {
  BaseComponent,
  getNativeProps
} from '../../Utilities';
import { ButtonBase } from './_Base/Button.Base';
import { IButtonBaseProps } from './_Base/Button.Base.types';
import { MenuButtonBase } from './_Base/MenuButton.Base';
import { IMenuButtonBaseProps } from './_Base/MenuButton.Base.types';
import { SplitButtonBase } from './_Base/SplitButton.Base';
import { ISplitButtonBaseProps } from './_Base/SplitButton.Base.types';

export class BaseButton extends BaseComponent<ISplitButtonBaseProps, {}> {

  private get _isSplitButton(): boolean {
    return (!!this.props.menuProps && !!this.props.onClick) && this.props.split === true;
  }

  public render(): JSX.Element {

    if (this._isSplitButton) {
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