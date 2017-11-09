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
import { Icon, IIconProps } from '../../../Icon';
import { IButtonBaseProps, IButtonBase } from './Button.Base.Props';
import { getAriaProps } from './ButtonUtils';

export class ButtonBase extends BaseComponent<IButtonBaseProps, {}> implements IButtonBase {

  public static defaultProps = {
    baseClassName: 'ms-Button',
    classNames: {},
    styles: {}
  };

  private _buttonElement: HTMLElement;
  private _labelId: string;
  private _descriptionId: string;
  private _ariaDescriptionId: string;

  constructor(props: IButtonBaseProps, rootClassName: string) {
    super(props);

    this._labelId = getId();
    this._descriptionId = getId();
    this._ariaDescriptionId = getId();
  }

  public render(): JSX.Element {
    const {
      className,
      disabled,
      href,
      checked,
      onRenderIcon = this._onRenderIcon,
      onRenderAriaDescription = this._onRenderAriaDescription,
      onRenderChildren = this._onRenderChildren,
      onRenderMenuIcon = this._onRenderMenuIcon
    } = this.props;

    // Anchor tag cannot be disabled hence in disabled state rendering
    // anchor button as normal button
    const renderAsAnchor: boolean = !disabled && !!href;

    const nativeProps = this._getNativeProps(this.props, renderAsAnchor);

    const {
      ariaDescribedBy,
      ariaLabelledBy,
      ariaLabel,
      ariaHidden,
      ariaDescription
    } = getAriaProps(
        this.props,
        getNativeProps(this.props, [renderAsAnchor ? 'a' : 'button']
        ));

    return React.createElement(
      renderAsAnchor ? 'a' : 'button',
      {
        ...nativeProps,
        className: className,
        type: !renderAsAnchor && 'button',
        'disabled': disabled,
        'data-is-focusable': ((this.props as any)['data-is-focusable'] === false || disabled) ? false : true,
        'aria-pressed': checked,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        'aria-describedby': ariaDescribedBy
      },
      onRenderIcon(this.props, this._onRenderIcon),
      this._onRenderTextContents(this.props),
      onRenderAriaDescription(this.props, this._onRenderAriaDescription),
      onRenderChildren(this.props, this._onRenderChildren),
      onRenderMenuIcon(this.props, this._onRenderMenuIcon)
    );
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
  private _getNativeProps(props: IButtonBaseProps, renderAsAnchor: boolean) {
    return getNativeProps(
      props,
      renderAsAnchor ? anchorProperties : buttonProperties,
      ['disabled']
    );
  }

  @autobind
  private _onRenderIcon(props: IButtonBaseProps): JSX.Element | null {
    return props.iconProps ? <Icon {...props.iconProps} /> : null;
  }

  @autobind
  private _onRenderMenuIcon(props: IButtonBaseProps): JSX.Element | null {
    return props.menuIconProps ? <Icon {...props.menuIconProps} /> : null;
  }

  @autobind
  private _onRenderTextContents(props: IButtonBaseProps): JSX.Element | null {
    let {
      description,
      children,
      text = typeof (children) === 'string' ? children : undefined, // default to children if children is string
      onRenderText = this._onRenderText,
      onRenderDescription = this._onRenderDescription
    } = props;

    if (text || description || onRenderText || onRenderDescription) {
      return (
        <div className={ 'textContainer' } >
          { onRenderText({ ...props, text }, this._onRenderText) }
          { onRenderDescription(props, this._onRenderDescription) }
        </div>
      );
    }

    return null;
  }

  @autobind
  private _onRenderText(props: IButtonBaseProps): JSX.Element | null {
    let {
      text,
      labelId = this._labelId
    } = props;

    if (text) {
      return (
        <div
          key={ labelId }
          className={ 'label' }
          id={ labelId }
        >
          { text }
        </div>
      );
    }

    return null;
  }

  @autobind
  private _onRenderDescription(props: IButtonBaseProps): JSX.Element | null {
    const {
    description,
      descriptionId = this._descriptionId
    } = this.props;

    // ms-Button-description is only shown when the button type is compound.
    // In other cases it will not be displayed.
    if (description) {
      return (
        <div
          key={ descriptionId }
          className={ 'description' }
          id={ descriptionId }
        >
          { description }
        </div>
      );
    }

    return null;
  }

  @autobind
  private _onRenderChildren(): JSX.Element | null {
    const { children } = this.props;

    // If children is just a string, either it or the text will be rendered via onRenderLabel
    // If children is another component, it will be rendered after text
    if (typeof (children) === 'string') {
      return null;
    }

    return children as any;
  }

  @autobind
  private _onRenderAriaDescription(props: IButtonBaseProps): JSX.Element | null {
    const {
      ariaDescriptionId = this._ariaDescriptionId,
      ariaDescription
    } = this.props;

    // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
    // otherwise it will be assigned to descriptionSpan.
    if (ariaDescription) {
      return (
        <span className={ 'screenReaderText' } id={ ariaDescriptionId }>{ ariaDescription }</span>
      );
    }

    return null;
  }
}