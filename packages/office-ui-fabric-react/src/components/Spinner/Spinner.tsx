import * as React from 'react';
import { css } from '../../Utilities';
import {
  ISpinnerProps,
  SpinnerSize,
  SpinnerType
} from './Spinner.Props';
import './Spinner.scss';
import styles from './Spinner.scss';

export class Spinner extends React.Component<ISpinnerProps, any> {
  public static defaultProps: ISpinnerProps = {
    size: SpinnerSize.medium
  };

  public render() {
    let { type, size, label, className } = this.props; // TODO remove deprecated type property at >= 2.0.0

    return (
      <div className={ css('ms-Spinner', styles.root, className) }>
        <div className={ css('ms-Spinner-circle', styles.circle,
          {
            ['ms-Spinner--normal ' + styles.isNormal]: type === SpinnerType.normal,
            ['ms-Spinner--large ' + styles.isLarge]: type === SpinnerType.large
          })
        }>
        </div>
        { label && (
          <div className={ css('ms-Spinner-label', styles.label) }>{ label }</div>
        ) }
      </div >
    );
  }
}