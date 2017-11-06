import * as React from 'react';
import { ButtonBase, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

export class ButtonBaseExample extends React.Component<IButtonProps, {}> {
  public render() {
    let { disabled, checked } = this.props;

    return (
      <ButtonBase
        iconProps={ { iconName: 'Delete' } }
        data-automation-id='test'
        disabled={ disabled }
        checked={ checked }
        text='Butjon'
      />
    );
  }

  private _alertClicked(): void {
    alert('Clicked');
  }
}