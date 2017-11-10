import * as React from 'react';
import { IBaseButtonProps } from 'office-ui-fabric-react/lib/Button';
import { TestButton } from './TestButton';
import { Label } from 'office-ui-fabric-react/lib/Label';

export class TestButtonExample extends React.Component<IBaseButtonProps, {}> {
  public render() {
    let { disabled, checked } = this.props;

    return (
      <div>

        <TestButton
          disabled={ disabled }
          checked={ checked }
          text='BaseButton'
          description='description!!'
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