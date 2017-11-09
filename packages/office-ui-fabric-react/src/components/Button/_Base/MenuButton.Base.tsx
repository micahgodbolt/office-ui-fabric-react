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
import { ButtonBase } from './Button.Base';
import { Icon, IIconProps } from '../../../Icon';
import { DirectionalHint } from '../../../common/DirectionalHint';
import { ContextualMenu, IContextualMenuProps } from '../../../ContextualMenu';
import { IMenuButtonProps } from './MenuButton.Base.Props';

export interface IMenuButtonBaseState {
  menuIsOpen: boolean;
}

export class MenuButtonBase extends BaseComponent<IMenuButtonProps, IMenuButtonBaseState> {

  private _menuButton: HTMLElement;

  constructor(props: IMenuButtonProps) {
    super(props);

    this.state = {
      menuIsOpen: false
    };
  }

  public render(): JSX.Element {
    const {
      menuProps,
      onRenderMenu = this._onRenderMenu
    } = this.props;
    return (
      <ButtonBase
        onClick={ this._onMenuClick }
        onKeyDown={ this._onMenuKeyDown }
        {...this.props}
      >
        { this.state.menuIsOpen && menuProps &&
          onRenderMenu(menuProps, this._onRenderMenu)
        }
      </ButtonBase>
    );
  }

  public dismissMenu(): void {
    this.setState({ menuIsOpen: false });
  }

  @autobind
  private _onRenderMenu(menuProps: IContextualMenuProps): JSX.Element {
    const { onDismiss = this._onToggleMenu } = menuProps;

    return (
      <ContextualMenu
        id={ '-menu' }
        directionalHint={ DirectionalHint.bottomLeftEdge }
        {...menuProps}
        className={ 'ms-BaseButton-menuhost ' + menuProps.className }
        target={ this._menuButton }
        labelElementId={ 'labelID' }
        onDismiss={ onDismiss }
      />
    );
  }

  @autobind
  private _onToggleMenu(): void {
    this.setState((prevState: IMenuButtonBaseState) => {
      return { menuIsOpen: !prevState.menuIsOpen };
    });
  }

  @autobind
  private _onMenuKeyDown(ev: React.KeyboardEvent<HTMLAnchorElement>) {
    if (ev.which === KeyCodes.down) {
      let { onMenuClick } = this.props;
      onMenuClick && onMenuClick(ev, this);
      !ev.defaultPrevented && this._onToggleMenu();
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  @autobind
  private _onMenuClick(ev: React.MouseEvent<HTMLAnchorElement>) {
    let { onMenuClick } = this.props;
    onMenuClick && onMenuClick(ev, this);
    !ev.defaultPrevented && this._onToggleMenu();
    ev.preventDefault();
    ev.stopPropagation();
  }
}