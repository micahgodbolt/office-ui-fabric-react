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
} from '../../Utilities';
import { Icon, IIconProps } from '../../Icon';
import { DirectionalHint } from '../../common/DirectionalHint';
import { ContextualMenu, IContextualMenuProps } from '../../ContextualMenu';
import { IButtonProps, IButton } from './Button.Props';
import { ButtonBase, IButtonBaseProps } from './_Base/Button.Base';
import { ContextualButtonBase } from './_Base/ContextualButton.Base';
import { IButtonClassNames, getClassNames } from './BaseButton.classNames';
import { getClassNames as getSplitButtonClassNames, ISplitButtonClassNames } from './SplitButton/SplitButton.classNames';

export interface IBaseButtonProps extends IButtonBaseProps {
  baseClassName?: string;
  variantClassName?: string;
}

export interface IBaseButtonState {
  menuProps?: IContextualMenuProps | null;
}

export class BaseButton extends BaseComponent<IBaseButtonProps, IBaseButtonState> implements IButton {

  private get _isSplitButton(): boolean {
    return (!!this.props.menuProps && !!this.props.onClick) && this.props.split === true;
  }

  private get _isExpanded(): boolean {
    return !!this.state.menuProps;
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
  private _classNames: IButtonClassNames;

  constructor(props: IBaseButtonProps, rootClassName: string) {
    super(props);

    this._warnConditionallyRequiredProps(
      ['menuProps', 'onClick'],
      'split',
      this.props.split!
    );

    this._warnDeprecations({
      rootProps: undefined
    });
    this._labelId = getId();
    this._descriptionId = getId();
    this._ariaDescriptionId = getId();
    this.state = {
      menuProps: null
    };
  }

  public render(): JSX.Element {

    const {
      className,
      disabled,
      primaryDisabled,
      styles,
      checked,
      variantClassName,
      text
    } = this.props;

    const {
      ariaDescribedBy,
      ariaLabeledBy,
      ariaLabel,
      ariaHidden,
      ariaDescription
    } = this._getAriaProps(this.props, getNativeProps(this.props, ['div']));

    const buttonProps = {
      'aria-labelledby': ariaLabeledBy,
      'aria-disabled': disabled,
      'aria-haspopup': this._isSplitButton || !!this.props.menuProps,
      'aria-expanded': this._isExpanded,
      'aria-pressed': this.props.checked,
      'aria-describedby': ariaDescribedBy,
      'onKeyDown': this._onMenuKeyDown,
      ref: this._resolveRef('_buttonElement')
    };

    const contextualButtonProps: IButtonProps = {
      menuIconProps: this.props.menuIconProps || { iconName: 'ChevronDown' },
      menuProps: this.props.menuProps,
      onMenuClick: this.props.onMenuClick,
      onRenderMenuIcon: this.props.onRenderMenuIcon,
      onRenderMenu: this.props.onRenderMenu,
      disabled: this.props.disabled
    };

    const primaryProps: IBaseButtonProps = {
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

    if (this._isSplitButton) {
      return (
        <div { ...buttonProps } >
          <ButtonBase
            { ...primaryProps }
            disabled={ this.props.primaryDisabled }
          />
          <ContextualButtonBase {...contextualButtonProps} />
        </div>
      );
    } else if (this.props.menuProps) {
      return (
        <div { ...buttonProps } >
          <ContextualButtonBase  {...primaryProps} {...contextualButtonProps} />
        </div>
      );
    } else {
      return (
        <div { ...buttonProps } >
          <ButtonBase {...primaryProps} />
        </div>
      );
    }

  }

  public focus(): void {
    if (this._buttonElement) {
      this._buttonElement.focus();
    }
  }

  public dismissMenu(): void {
    this.setState({ menuProps: null });
  }

  @autobind
  private _getAriaProps(props: IButtonProps, nativeProps: {}) {
    let ariaDescribedBy: string | null = null;
    let ariaLabeledBy: string | null = null;
    let nativeAriaDescribedBy: string | null = (nativeProps as any)['aria-describedby'];
    let nativeAriaLabeledBy: string | null = (nativeProps as any)['aria-labelledby'];

    if (props.ariaDescription) {
      ariaDescribedBy = this._ariaDescriptionId;
    } else if (props.description) {
      ariaDescribedBy = this._descriptionId;
    } else if (nativeAriaDescribedBy) {
      ariaDescribedBy = nativeAriaDescribedBy;
    }

    if (!props.ariaLabel) {
      if (nativeAriaLabeledBy) {
        ariaLabeledBy = nativeAriaLabeledBy;
      } else if (ariaDescribedBy) {
        ariaLabeledBy = props.text ? this._labelId : null;
      }
    }

    return {
      ariaDescribedBy,
      ariaLabeledBy,
      ariaLabel: props.ariaLabel,
      ariaHidden: props.ariaHidden,
      ariaDescription: props.ariaDescription
    };
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