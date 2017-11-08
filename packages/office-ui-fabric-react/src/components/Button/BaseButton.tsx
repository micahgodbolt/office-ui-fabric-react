import * as React from 'react';
import {
  BaseComponent
} from '../../Utilities';
import { IButtonProps, IButton } from './Button.Props';
import { ButtonBase } from './_Base/Button.Base';
import { ContextualButtonBase } from './_Base/ContextualButton.Base';
import { SplitButtonBase } from './_Base/SplitButton.Base';

export class BaseButton extends BaseComponent<IButtonProps, {}> {

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
        <ContextualButtonBase {...this.props} />
      );
    } else {
      return (
        <ButtonBase {...this.props} />
      );
    }

  }

}