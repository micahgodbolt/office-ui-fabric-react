import { memoizeFunction } from '../../Utilities';
import { mergeStyleSets, IStyle } from '../../Styling';

export interface IAccordionStyles {
  /**
  * Style for the root element in the default enabled/unchecked state.
  */
  root?: IStyle;
}

export interface IAccordionNames {
  /**
  * Root html container for this component.
  */
  root?: string;
}

export const getClassNames = memoizeFunction((): IAccordionNames => {
  return mergeStyleSets({
    root: []
  });
});
