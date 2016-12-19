import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Breadcrumb } from '../../../lib/Breadcrumb';

storiesOf('Breadcrumb', module)
  .add('Default', () => (
    <Breadcrumb
        items={ [
          {text: 'Files', 'key': 'Files'},
          {text: 'This is folder 1', 'key': 'f1'},
          {text: 'This is folder 2', 'key': 'f2'},
          {text: 'This is folder 3', 'key': 'f3'},
          {text: 'This is folder 4', 'key': 'f4'},
          {text: 'This is folder 5', 'key': 'f5'},
        ] }
        maxDisplayedItems={ 3 } />
  ));