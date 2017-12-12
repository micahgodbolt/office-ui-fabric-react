import { IStyleFunction } from '../../Utilities';
import { IButtonBaseStyleProps, IButtonBaseStyles } from '../../Button';
import { ITheme } from '../../Styling';

export interface IGridCellProps<T> {

  /**
   * The option that will be made available to the user
   */
  item: T;

  /**
   * Arbitrary unique string associated with this option
   */
  id: string;

  /**
   * Optional, if the this option should be diabled
   */
  disabled?: boolean;

  /**
   * Optional, if the cell is currently selected
   */
  selected?: boolean;

  /**
   * The on click handler
   */
  onClick?: (item: T) => void;

  /**
   * The render callback to handle rendering the item
   */
  onRenderItem: (item: T) => JSX.Element;

  /**
   * Optional, the onHover handler
   */
  onHover?: (item?: T) => void;

  /**
   * Optional, the onFocus handler
   */
  onFocus?: (item: T) => void;

  /**
   * The accessible role for this option
   */
  role?: string;

  /**
   * Optional, className(s) to apply
   */
  className?: string;

  /**
  * Index for this option
  */
  index?: number;

  /**
 * The label for this item.
 * Visible text if this item is a header,
 * tooltip if is this item is normal
 */
  label?: string;

  /**
 * Call to provide customized styling that will layer on top of the variant rules.
 */
  getStyles?: IStyleFunction<IButtonBaseStyleProps, IButtonBaseStyles>;
}
