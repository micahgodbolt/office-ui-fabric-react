import * as React from 'react';
import {
  BaseComponent,
  customizable,
  autobind,
  getId
} from '../../../Utilities';
import { VerticalDivider } from 'office-ui-fabric-react/lib/Divider';
import { ButtonBase } from './Button.base';
import { IButtonBaseProps } from './Button.base.types';
import { MenuButtonBase } from './MenuButton.base';
import { IMenuButtonBaseProps } from './MenuButton.base.types';
import {
  ISplitButton,
  ISplitButtonBaseProps,
} from './SplitButton.base.types';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';


@customizable('SplitButtonBase', ['theme'])
export class SplitButtonBase extends BaseComponent<ISplitButtonBaseProps, {}> implements ISplitButton {

  public static defaultProps = {
    split: false
  };

  private _buttonElement: HTMLElement;
  private _labelId: string;


  constructor(props: ISplitButtonBaseProps) {
    super(props);
    this._labelId = getId();
  }

  public render(): JSX.Element {

    const {
      primaryDisabled
    } = this.props;


    const buttonProps = {
      'aria-disabled': primaryDisabled,
      'aria-haspopup': true,
      'data-target-id': this._labelId,
      componentRef: this._resolveRef('_buttonElement')
    };

    const primaryProps: IButtonBaseProps = {
      ...this.props as IButtonBaseProps,
      labelId: this._labelId,
      menuIconProps: undefined,
      onRenderMenuIcon: undefined
    };

    const isSplit = !!this.props.menuProps && !!this.props.onClick && this.props.split;

    if (isSplit) {
      return (
        <ButtonBase
          { ...primaryProps }
          { ...buttonProps } // merge these two together
          disabled={ primaryDisabled }
          onRenderSuffix={ this._onRenderSplitSuffix }
        />
      );
    } else if (this.props.menuProps) {
      return (
        <MenuButtonBase
          {...this.props as IMenuButtonBaseProps}
          menuIconProps={ this.props.menuIconProps || { iconName: 'ChevronDown' } }
        />
      );
    } else {
      return (
        <ButtonBase {...this.props as IButtonBaseProps } />
      );
    }
  }

  @autobind
  private _onRenderSplitSuffix(): JSX.Element {

    const {
      menuIconProps,
      onMenuClick,
      onRenderMenuIcon,
      onRenderMenu,
      disabled,
      getSplitStyles = this.props.getStyles, // default to getStyles if split is not supplied
      primary
    } = this.props;
    const menuButtonProps: IMenuButtonBaseProps = {
      menuIconProps: menuIconProps || { iconName: 'ChevronDown' },
      menuProps: {
        items: [], // assure that items won't be empty
        ...this.props.menuProps,
        target: `[data-target-id='${this._labelId}']`
      },
      getStyles: getSplitStyles,
      primary,
      onMenuClick,
      onRenderMenuIcon,
      onRenderMenu,
      disabled,
    };

    return (
      <span style={ { display: 'flex' } }>
        {/* move these styles into component when converted to getStyles */ }
        <span style={ { margin: '4px -.5px', position: 'relative', zIndex: 1 } }><VerticalDivider /> </span>
        <MenuButtonBase {...menuButtonProps} />
      </span>
    )
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