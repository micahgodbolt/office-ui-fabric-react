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
  KeyCodes
} from '../../../Utilities';
import { getAriaProps } from './ButtonUtils';
import { IButtonProps, IButton } from '../Button.Props';
import { ButtonBase, IButtonBaseProps } from '../_Base/Button.Base';
import { ContextualButtonBase } from '../_Base/ContextualButton.Base';

export interface ISplitButtonState {
  menuOpen?: boolean;
}

export class SplitButtonBase extends BaseComponent<IButtonProps, ISplitButtonState> implements IButton {

  private get _isExpanded(): boolean {
    return !!this.state.menuOpen;
  }

  public static defaultProps = {
    baseClassName: 'ms-Button',
    classNames: {},
    styles: {},
    split: false
  };

  private _buttonElement: HTMLElement;
  private _splitButtonContainer: HTMLElement;
  private _labelId: string;
  private _descriptionId: string;
  private _ariaDescriptionId: string;

  constructor(props: IButtonProps, rootClassName: string) {
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
      styles,
      checked,
      text
    } = this.props;

    const {
      ariaDescribedBy,
      ariaLabeledBy,
      ariaLabel,
      ariaHidden,
      ariaDescription
    } = getAriaProps(this.props, getNativeProps(this.props, ['div']));

    const buttonProps = {
      'aria-labelledby': ariaLabeledBy,
      'aria-disabled': disabled,
      'aria-haspopup': true,
      'aria-expanded': this._isExpanded,
      'aria-pressed': this.props.checked,
      'aria-describedby': ariaDescribedBy,
      'onKeyDown': this._onMenuKeyDown,
      ref: this._resolveRef('_buttonElement')
    };

    const contextualButtonProps: IButtonProps = {
      menuIconProps: this.props.menuIconProps || { iconName: 'ChevronDown' },
      menuProps: {
        items: [], // assure that items won't be empty
        ...this.props.menuProps,
        target: this._buttonElement
      },
      onMenuClick: this.props.onMenuClick,
      onRenderMenuIcon: this.props.onRenderMenuIcon,
      onRenderMenu: this.props.onRenderMenu,
      disabled: this.props.disabled,
    };

    const primaryProps: IButtonBaseProps = {
      ...this.props,
      menuIconProps: undefined,
      menuProps: undefined,
      onRenderMenuIcon: undefined,
      onRenderMenu: undefined,
      ariaLabel: undefined,
      ariaHidden: undefined,
      ariaDescription: undefined,
      ariaDescriptionId: this._ariaDescriptionId,
      labelId: this._labelId,
      descriptionId: this._descriptionId
    };

    return (
      <div { ...buttonProps } >
        <ButtonBase
          { ...primaryProps }
          disabled={ this.props.primaryDisabled }
        />
        <ContextualButtonBase {...contextualButtonProps} />
      </div>
    );

  }

  public focus(): void {
    if (this._buttonElement) {
      this._buttonElement.focus();
    }
  }

  public dismissMenu(): void {
    this.setState({ menuOpen: false });
  }

  @autobind
  private _onToggleMenu(): void {
    return;
  }

  @autobind
  private _onMenuKeyDown(ev: React.KeyboardEvent<HTMLElement>) {
    if (ev.which === KeyCodes.down) {
      let { onMenuClick } = this.props;
      onMenuClick && onMenuClick(ev, this);
      !ev.defaultPrevented && this._onToggleMenu();
      ev.preventDefault();
      ev.stopPropagation();
    }
  }
}