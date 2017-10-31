import * as React from 'react';
import {
  ExampleCard,
  IComponentDemoPageProps,
  ComponentPage,
  // PropertiesTableSet
} from '@uifabric/example-app-base';
import { AccordionBasicExample } from './examples/Accordion.Basic.Example';

const AccordionBasicExampleCode = require(
  '!raw-loader!experiments/src/components/Accordion/examples/Accordion.Basic.Example.tsx'
) as string;

export class AccordionPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='Accordion'
        componentName='AccordionExample'
        exampleCards={
          <div>
            <ExampleCard title='Accordion' code={ AccordionBasicExampleCode }>
              <AccordionBasicExample />
            </ExampleCard>
          </div>
        }
        /* tslint:disable:max-line-length */
        overview={
          <div />
        }
        /* tslint:enable:max-line-length */
        isHeaderVisible={ false }
      />
    );
  }

}
