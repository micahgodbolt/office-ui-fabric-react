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
import { IButtonProps, IButton } from '../Button.Props';

export class ButtonBase extends BaseComponent<IButtonProps, {}> implements IButton {

  public static defaultProps = {
    baseClassName: 'ms-Button',
    classNames: {},
    styles: {}
  };

  private _buttonElement: HTMLElement;
  private _labelId: string;
  private _descriptionId: string;
  private _ariaDescriptionId: string;

  constructor(props: IButtonProps, rootClassName: string) {
    super(props);

    this._warnDeprecations({
      rootProps: undefined
    });
    this._labelId = getId();
    this._descriptionId = getId();
    this._ariaDescriptionId = getId();
  }

  public render(): JSX.Element {
    const {
      className,
      disabled,
      href,
      styles,
      checked,
      onRenderIcon = this._onRenderIcon,
      onRenderAriaDescription = this._onRenderAriaDescription,
      onRenderChildren = this._onRenderChildren,
      onRenderMenuIcon = this._onRenderMenuIcon
    } = this.props;

    const { _ariaDescriptionId, _labelId, _descriptionId } = this;

    // Anchor tag cannot be disabled hence in disabled state rendering
    // anchor button as normal button
    const renderAsAnchor: boolean = !disabled && !!href;

    const nativeProps = this._getNativeProps(this.props, renderAsAnchor);

    const {ariaDescribedBy, ariaLabeledBy, ariaLabel, ariaHidden} = this._getAriaProps(this.props, nativeProps);

    return React.createElement(
      renderAsAnchor ? 'a' : 'button',
      {
        ...nativeProps,
        type: !renderAsAnchor && 'button',
        className: 'root',
        'disabled': disabled,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabeledBy,
        'aria-describedby': ariaDescribedBy,
        'data-is-focusable': ((this.props as any)['data-is-focusable'] === false || disabled) ? false : true,
        'aria-pressed': checked,
        'aria-hidden': ariaHidden
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
  private _getNativeProps(props: IButtonProps, renderAsAnchor: boolean) {
    return getNativeProps(
      props,
      renderAsAnchor ? anchorProperties : buttonProperties,
      ['disabled']
    );
  }

  @autobind
  private _getAriaProps(props: IButtonProps, nativeProps: {}) {
    let ariaDescribedBy: string | null = null;
    let ariaLabeledBy: string | null = null;

    if (props.ariaDescription) {
      ariaDescribedBy = this._ariaDescriptionId;
    } else if (props.description) {
      ariaDescribedBy = this._descriptionId;
    } else if ((nativeProps as any)['aria-describedby']) {
      ariaDescribedBy = (nativeProps as any)['aria-describedby'];
    }

    if (!props.ariaLabel) {
      if ((nativeProps as any)['aria-labelledby']) {
        ariaLabeledBy = (nativeProps as any)['aria-labelledby'];
      } else if (ariaDescribedBy) {
        ariaLabeledBy = props.text ? this._labelId : null;
      }
    }

    return { ariaDescribedBy, ariaLabeledBy, ariaLabel: props.ariaLabel, ariaHidden: props.ariaHidden };
  }

  @autobind
  private _onRenderIcon(props: IButtonProps): JSX.Element | null {
    return props.iconProps ? <Icon {...props.iconProps} /> : null;
  }

  @autobind
  private _onRenderMenuIcon(props: IButtonProps): JSX.Element | null {
    return props.menuIconProps ? <Icon {...props.menuIconProps} /> : null;
  }

  @autobind
  private _onRenderTextContents(props: IButtonProps): JSX.Element | null {
    let {
      description,
      children,
      text = typeof (children) === 'string' ? children : undefined, // default to children if children is string
      onRenderText = this._onRenderText,
      onRenderDescription = this._onRenderDescription
    } = props;

    if ( text || description || onRenderText || onRenderDescription) {
      return (
        <div className={ 'textContainer' } >
          { onRenderText({...props, text}, this._onRenderText) }
          { onRenderDescription(props, this._onRenderDescription) }
        </div>
      );
    }

    return null;
  }

  @autobind
  private _onRenderText(props: IButtonProps): JSX.Element | null {
    let {
      text
    } = props;

    if (text) {
      return (
        <div
          key={ this._labelId }
          className={ 'label' }
          id={ this._labelId }
        >
          { text }
        </div>
      );
    }

    return null;
  }

  @autobind
  private _onRenderDescription(props: IButtonProps): JSX.Element | null{
    const {
    description
    } = this.props;

    // ms-Button-description is only shown when the button type is compound.
    // In other cases it will not be displayed.
    if (description)  {
      return (
        <div
          key={ this._descriptionId }
          className={ 'description' }
          id={ this._descriptionId }
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
  private _onRenderAriaDescription(): JSX.Element | null {
    const {
      ariaDescription
    } = this.props;

    // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
    // otherwise it will be assigned to descriptionSpan.
    if ( ariaDescription ) {
      return (
        <span className={ 'screenReaderText' } id={ this._ariaDescriptionId }>{ ariaDescription }</span>
      );
    }

    return null;
  }
}