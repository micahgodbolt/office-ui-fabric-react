import * as React from 'react';
import { BaseComponent, autobind } from '../../Utilities';
import { IAccordionProps } from './Accordion.Props';
import { BaseButton } from 'office-ui-fabric-react/lib/Button';

export interface IAccordionState {
  isContentVisible: boolean;
}

export class Accordion extends BaseComponent<IAccordionProps, IAccordionState> {

  constructor(props: IAccordionProps) {
    super(props);

    this.state = {
      isContentVisible: false
    };
  }

  public render(): JSX.Element {
    const { buttonProps, onRenderContent } = this.props;
    return (
      <div className='ms-Accordion'>
        <BaseButton
          className='ms-Accordion-title'
          onClick={ this._onTitleClick }
          {...buttonProps}
        />
        { this.state.isContentVisible &&
          <div className='ms-Accordion-content'>
            { onRenderContent && onRenderContent(this.props) }
          </div>
        }
      </div>
    );
  }

  @autobind
  private _onTitleClick(ev: React.MouseEvent<HTMLAnchorElement>): void {
    this.setState((prevState: IAccordionState, props: IAccordionProps) => {
      return { isContentVisible: !prevState.isContentVisible };
    });
  }
}