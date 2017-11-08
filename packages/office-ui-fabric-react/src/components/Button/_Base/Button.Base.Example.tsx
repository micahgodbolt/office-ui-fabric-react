import * as React from 'react';
import { ButtonBase, IButtonProps, ContextualButtonBase, BaseButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

export class ButtonBaseExample extends React.Component<IButtonProps, {}> {
  public render() {
    let { disabled, checked } = this.props;

    return (
      <div>
        {/* <ButtonBase
          iconProps={ { iconName: 'Delete' } }
          data-automation-id='test'
          disabled={ disabled }
          checked={ checked }
          text='Butjon'
          onClick={ this._alertClicked }
        /> */}

        {/* <ContextualButtonBase
          text='Click Me'
          menuProps={ {
            items: [
              {
                key: 'emailMessage',
                name: 'Email message',
                icon: 'Mail'
              },
              {
                key: 'calendarEvent',
                name: 'Calendar event',
                icon: 'Calendar'
              }
            ]
          } }
        />

        <SplitButtonBase
          text='Split Button'
          onClick={ this._alertClicked }
          menuProps={ {
            items: [
              {
                key: 'emailMessage',
                name: 'Email message',
                icon: 'Mail'
              },
              {
                key: 'calendarEvent',
                name: 'Calendar event',
                icon: 'Calendar'
              }
            ]
          } }
        /> */}

        <BaseButton
          disabled={ disabled }
          checked={ checked }
          text='BaseButton'
          description='description'
          onClick={ this._alertClicked }
        />
        <BaseButton
          disabled={ disabled }
          checked={ checked }
          text='ContextualButton'
          menuProps={ {
            items: [
              {
                key: 'emailMessage',
                name: 'Email message',
                icon: 'Mail'
              },
              {
                key: 'calendarEvent',
                name: 'Calendar event',
                icon: 'Calendar'
              }
            ]
          } }
        />

        <BaseButton
          disabled={ disabled }
          checked={ checked }
          text='SplitButton'
          split
          onClick={ this._alertClicked }
          menuProps={ {
            items: [
              {
                key: 'emailMessage',
                name: 'Email message',
                icon: 'Mail'
              },
              {
                key: 'calendarEvent',
                name: 'Calendar event',
                icon: 'Calendar'
              }
            ]
          } }
        />
      </div>

    );
  }

  private _alertClicked = () => {
    alert('Clicked');
  }
}