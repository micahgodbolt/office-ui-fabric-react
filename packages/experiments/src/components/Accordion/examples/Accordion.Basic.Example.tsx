import * as React from 'react';
import { Accordion } from '../BaseAccordion';
import { IAccordionProps } from './../Accordion.Props';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export class AccordionBasicExample extends React.Component<IAccordionProps, {}> {

  constructor(props: IAccordionProps) {
    super(props);
    this.state = {
    };
  }

  public render(): JSX.Element {

    return (
      <div>
        <Accordion
          onRenderContent={ this._onRenderContent }
          buttonProps={ {
            children: 'Click Me',
            iconProps: { iconName: 'delete' },
            menuIconProps: {}
          } }
        />
      </div>
    );
  }
  @autobind
  private _onRenderContent(props: IAccordionProps): JSX.Element {
    return (
      <p>Hi there</p>
    );
  }
}