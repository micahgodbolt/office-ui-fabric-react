/* tslint:disable:jsx-no-lambda */
/* tslint:disable:no-any */
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { BaseComponent, css } from 'office-ui-fabric-react/lib/Utilities';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import {
  OverflowSet,
  IOverflowSetItemProps
} from 'office-ui-fabric-react/lib/OverflowSet';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { Accordion } from '../BaseAccordion';
import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';

let sharedStyles = {
  root: {
    padding: '10px',
    width: '100%'
  }
};

export class AccordionCustomExample extends BaseComponent<{}, {}> {

  public render(): JSX.Element {
    return (
      <div>
        <OverflowSet
          vertical
          items={ [
            {
              key: 'item1',
              icon: 'Add',
              name: 'Link 1',
              ariaLabel: 'New. Use left and right arrow keys to navigate',
              onClick: () => { return; },
            },
            {
              key: 'item2',
              icon: 'Upload',
              name: 'Link 2',
              onClick: () => { return; },
            },
            {
              key: 'item3',
              icon: 'Share',
              name: 'Link 3',
              onClick: () => { return; }
            }
          ] }
          overflowItems={ [
            {
              key: 'item4',
              icon: 'Mail',
              name: 'Overflow Link 1',
              onClick: () => { return; }
            },
            {
              key: 'item5',
              icon: 'Calendar',
              name: 'Overflow Link 2',
              onClick: () => { return; }
            }
          ]
          }
          onRenderOverflowButton={ this._onRenderOverflowButton }
          onRenderItem={ this._onRenderItem }
        />
        <OverflowSet
          vertical
          items={ [
            {
              key: 'item1',
              icon: 'Add',
              name: 'Link 1',
              ariaLabel: 'New. Use left and right arrow keys to navigate',
              onClick: () => { return; },
            },
            {
              key: 'item2',
              icon: 'Upload',
              name: 'Link 2',
              onClick: () => { return; },
            },
            {
              key: 'item3',
              icon: 'Share',
              name: 'Link 3',
              onClick: () => { return; },
              overflowItems: [
                {
                  key: 'item4',
                  icon: 'Mail',
                  name: 'Overflow Link 1',
                  onClick: () => { return; }
                },
                {
                  key: 'item5',
                  icon: 'Calendar',
                  name: 'Overflow Link 2',
                  onClick: () => { return; }
                }
              ]
            }
          ] }
          onRenderOverflowButton={ this._onRenderOverflowButton }
          onRenderItem={ this._onRenderItem }
        />
      </div>
    );
  }

  @autobind
  private _onRenderItem(item: IOverflowSetItemProps): JSX.Element {
    if (item.overflowItems) {
      return (
        <Accordion
          buttonProps={ {
            iconProps: { iconName: item.icon },
            children: item.name,
            menuIconProps: {}
          } }
          onRenderContent={ () => {
            return (
              <div style={ { display: 'flex', flexDirection: 'column' } }>
                { item.overflowItems.map((entry: any) => this._onRenderItem(entry)) }
              </div>
            );
          }
          }
        />
      );
    }
    return (
      <CommandBarButton
        styles={ { root: { textAlign: 'left', height: '42px', width: '200px', border: 'none' } } }
        iconProps={ { iconName: item.icon } }
        onClick={ item.onClick }
        children={ item.name }
      />
    );
  }

  @autobind
  private _onRenderOverflowButton(overflowItems: any[] | undefined): JSX.Element {
    return (
      <CommandBarButton
        styles={ { root: { textAlign: 'left', height: '42px', width: '200px', border: 'none' } } }
        menuIconProps={ { iconName: 'More' } }
        menuProps={ { items: overflowItems!, calloutProps: { directionalHint: DirectionalHint.bottomRightEdge } } }
      />
    );
  }
}