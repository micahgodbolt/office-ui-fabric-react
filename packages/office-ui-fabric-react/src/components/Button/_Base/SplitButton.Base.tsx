import * as React from 'react';
import {
  BaseComponent,
  IRenderFunction,
  anchorProperties,
  assign,
  autobind,
  buttonProperties,
  getId,
  getNativeProps,
  KeyCodes,
  customizable
} from '../../../Utilities';
import { getAriaProps } from './ButtonUtils';
import { VerticalDivider } from '../../Divider';
import { ButtonBase } from './Button.Base';
import { IButtonBaseProps, IButtonBaseStyles } from './Button.Base.types';
import { MenuButtonBase } from './MenuButton.Base';
import { IMenuButtonBaseProps, IMenuButtonBaseStyles } from './MenuButton.Base.types';
import {
  ISplitButton,
  ISplitButtonBaseProps,
  ISplitButtonBaseStyleProps,
  ISplitButtonBaseStyles
} from './SplitButton.Base.types';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import {
  classNamesFunction
} from '../../../Styling';

const getClassNames = classNamesFunction<ISplitButtonBaseStyleProps, ISplitButtonBaseStyles>();

@customizable('SplitButtonBase', ['theme'])
export class SplitButtonBase extends BaseComponent<ISplitButtonBaseProps, {}> implements ISplitButton {

  public static defaultProps = {
    split: false
  };

  private _splitClassNames: {[key in keyof ISplitButtonBaseStyles]: string };
  private _buttonElement: HTMLElement;
  private _splitButtonContainer: HTMLElement;
  private _labelId: string;
  private _descriptionId: string;
  private _ariaDescriptionId: string;

  constructor(props: ISplitButtonBaseProps, rootClassName: string) {
    super(props);

    this._labelId = getId();
    this._descriptionId = getId();
    this._ariaDescriptionId = getId();
    this.state = {
      menuOpen: false
    };
  }

  public render(): JSX.Element {

    const {
      className,
      disabled,
      primaryDisabled,
      checked,
      text,
      getStyles,
      theme,
      expanded,
      buttonAs: ButtonType = ButtonBase,
      menuButtonAs: MenuButtonType = MenuButtonBase,
    } = this.props;

    this._splitClassNames = getClassNames(getStyles!, { theme: theme!, className, disabled, checked, expanded });

    const {
      ariaDescribedBy,
      ariaLabelledBy,
      ariaLabel,
      ariaHidden,
      ariaDescription
    } = getAriaProps(this.props, getNativeProps(this.props, ['div']));

    const buttonProps = {
      'aria-labelledby': ariaLabelledBy,
      'aria-disabled': disabled,
      'aria-haspopup': true,
      'aria-pressed': this.props.checked,
      'aria-describedby': ariaDescribedBy,
      'data-target-id': this._labelId,
      componentRef: this._resolveRef('_buttonElement')
    };

    const menuButtonProps: IMenuButtonBaseProps = {
      menuIconProps: this.props.menuIconProps || { iconName: 'ChevronDown' },
      menuProps: {
        items: [], // assure that items won't be empty
        ...this.props.menuProps,
        target: `[data-target-id='${this._labelId}']`
      },
      onMenuClick: this.props.onMenuClick,
      onRenderMenuIcon: this.props.onRenderMenuIcon,
      onRenderMenu: this.props.onRenderMenu,
      disabled: this.props.disabled,
    };

    const primaryProps: IButtonBaseProps = {
      ...this.props as IButtonBaseProps,
      menuIconProps: undefined,
      onRenderMenuIcon: undefined,
      ariaLabel: undefined,
      ariaHidden: undefined,
      ariaDescription: undefined,
      getStyles: undefined,
      ariaDescriptionId: this._ariaDescriptionId,
      labelId: this._labelId,
      descriptionId: this._descriptionId
    };

    return (
      <FocusZone
        className={ this._splitClassNames.root }
        { ...buttonProps }
        direction={ FocusZoneDirection.horizontal }
      >
        <ButtonType
          { ...primaryProps }
          disabled={ this.props.primaryDisabled }
        />
        <VerticalDivider />
        <MenuButtonType {...menuButtonProps} />
      </FocusZone>
    );

  }

  public focus(): void {
    if (this._buttonElement) {
      this._buttonElement.focus();
    }
  }

  public dismissMenu(): void {
    // this.setState({ menuOpen: false });
  }

}