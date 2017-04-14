/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import {
  OverflowSet
} from '../../OverflowSet';
import { ResizeGroup } from '../../ResizeGroup';

import { data } from './items';

interface ResizeOverflowSetProps {
  items: {
    overflow: any[];
    primary: any[];
  }
}

class ResizeOverflowSet extends ResizeGroup<ResizeOverflowSetProps> { }

export class ResizeGroupOverflowSetExample extends BaseComponent<any, any> {

  public render() {
    return (
      <ResizeOverflowSet
        items={ data }
        onReduce={ (currentProps, originalProps) => {
          let overflow = currentProps.overflow.concat(currentProps.primary.slice(-1));
          let primary = currentProps.primary.slice(0, -1);

          return currentProps;
        } }
        onRender={ (items) => {
          return (
            <OverflowSet
              items={ items.primary }
              overflowItems={ items.overflow.length ? items.overflow : null }
              onRenderItem={ (item) => {
                return (
                  <DefaultButton
                    text={ item.name }
                    icon={ item.icon }
                    onClick={ item.onClick }
                  />
                );
              } }
            />
          );
        } }
      />
    );
  };
}