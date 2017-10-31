import { memoizeFunction } from '../../Utilities';
import { mergeStyleSets, IStyle, ITheme } from '../../Styling';
import {
  getStyles as getBaseButtonStyles
} from '../../../../office-ui-fabric-react/src/components/Button/BaseButton.styles';
import {
  getStyles as getSplitButtonStyles
} from '../../../../office-ui-fabric-react/src/components/Button/SplitButton/SplitButton.styles';

export interface IAccordionStyles {
  /**
  * Style for the root element in the default enabled/unchecked state.
  */
  root?: IStyle;

  title?: IStyle;

  content?: IStyle;
}

export interface IAccordionNames {
  /**
  * Root html container for this component.
  */
  root?: string;

  title?: string;

  content?: string;
}

export const getClassNames = memoizeFunction((theme: ITheme, ): IAccordionNames => {
  return mergeStyleSets({
    root: [],
    title: [],
    content: []
  }, getBaseButtonStyles(theme), getSplitButtonStyles(theme));
});
