import * as React from 'react';

import {
  ISplitButtonBaseProps,
  ISplitButtonBaseStyles,
  ISplitButtonBaseStyleProps
} from '../_Base/SplitButton.Base.types';
import { SplitButtonBase } from '../_Base/SplitButton.Base';
import { ButtonBase } from '../_Base/Button.Base';
import { MenuButtonBase } from '../_Base/MenuButton.Base';
import { VerticalDivider } from '../../../Divider';
import { styled } from '../../../Styling';
import { getStyles, getButtonStyles, getMenuButtonStyles } from './TestButton.styles';

// Create a Breadcrumb variant which uses these default styles and this styled subcomponent.
export const TestButton = styled(
  SplitButtonBase,
  getStyles,
  props => ({
    buttonAs: styled(ButtonBase, getButtonStyles),
    menuButtonAs: styled(MenuButtonBase, getMenuButtonStyles)
  })
);
