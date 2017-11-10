import * as React from 'react';

import {
  ISplitButtonBaseProps,
  ISplitButtonBaseStyles,
  ISplitButtonBaseStyleProps
} from '../_Base/SplitButton.Base.Props';
import { SplitButtonBase } from '../_Base/SplitButton.Base';
import { styled } from '../../../Styling';
import { getStyles } from './TestButton.styles';

// Create a Breadcrumb variant which uses these default styles and this styled subcomponent.
export const TestButton = styled(
  SplitButtonBase,
  getStyles,
);
