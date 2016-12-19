import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button, ButtonType } from '../../../lib/Button';

storiesOf('Button', module)
  .add('Default', () => (
    <Button>Create account</Button>
  ))
  .add('Default.Disabled', () => (
    <Button disabled='true' >Create account</Button>
  ))
  .add('Primary', () => (
     <Button buttonType={ ButtonType.primary }>Create account</Button>
  ))
  .add('Primary.Disabled', () => (
     <Button buttonType={ ButtonType.primary } disabled='true'>Create account</Button>
  ))
  .add('Command', () => (
    <Button
          data-automation-id='test'
          buttonType={ ButtonType.command }
          icon='AddFriend'
          description='Description of the action this button takes'
        >
          Create account
        </Button>
  ))
  .add('Command.Disabled', () => (
    <Button
          data-automation-id='test'
          disabled='true'
          buttonType={ ButtonType.command }
          icon='AddFriend'
          description='Description of the action this button takes'
        >
          Create account
        </Button>
  ))
  .add('Hero', () => (
      <Button
          buttonType={ ButtonType.hero }
          icon='Add' >
          Create account
        </Button>
  ))
  .add('Hero.Disabled', () => (
      <Button
          disabled='true'
          buttonType={ ButtonType.hero }
          icon='Add' >
          Create account
        </Button>
  ))
  .add('Icon', () => (
       <Button
          buttonType={ ButtonType.icon }
          icon='Emoji2'
          title='Emoji'
          ariaLabel='Emoji' />
  ));

