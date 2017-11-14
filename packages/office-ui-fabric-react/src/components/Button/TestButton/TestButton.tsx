import * as React from 'react';
import {
  BaseComponent,
  getNativeProps
} from '../../../Utilities';
import {
  ISplitButtonBaseProps,
  ISplitButtonBaseStyles,
  ISplitButtonBaseStyleProps
} from '../_base/SplitButton.base.types';
import { styled } from '../../../Styling';
import { ButtonBase } from '../_base/Button.base';
import { IButtonBaseProps } from '../_base/Button.base.types';
import { MenuButtonBase } from '../_base/MenuButton.base';
import { IMenuButtonBaseProps } from '../_base/MenuButton.base.types';
import { SplitButtonBase } from '../_base/SplitButton.base';

import { getStyles, getButtonStyles, getMenuButtonStyles } from './TestButton.styles';

const TestSplitButton = styled(
  SplitButtonBase,
  getStyles,
  props => ({
    buttonAs: styled(ButtonBase, getButtonStyles),
    menuButtonAs: styled(MenuButtonBase, getMenuButtonStyles)
  })
);

const MenuButton = styled(
  MenuButtonBase,
  getButtonStyles,
  props => ({
    menuIconProps: { iconName: 'ChevronDown' }
  })
);

const Button = styled(
  ButtonBase,
  getButtonStyles
);

export class TestButton extends BaseComponent<ISplitButtonBaseProps, {}> {

  public render(): JSX.Element {
    const isSplit = !!this.props.menuProps && !!this.props.onClick && this.props.split;

    if (isSplit) {
      return (
        <TestSplitButton {...this.props} />
      );
    } else if (this.props.menuProps) {
      return (
        <MenuButton {...this.props as IMenuButtonBaseProps} />
      );
    } else {
      return (
        <Button {...this.props as IButtonBaseProps } />
      );
    }

  }
}
