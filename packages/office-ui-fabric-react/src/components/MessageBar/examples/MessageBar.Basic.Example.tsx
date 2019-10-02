import * as React from 'react';
import { MessageBarButton, Link, Stack, StackItem, MessageBar, MessageBarType, ChoiceGroup, IStackProps } from 'office-ui-fabric-react';

const horizontalStackProps: IStackProps = {
  horizontal: true,
  tokens: { childrenGap: 16 }
};
const verticalStackProps: IStackProps = {
  styles: { root: { overflow: 'hidden', width: '100%' } },
  tokens: { childrenGap: 20 }
};

export const MessageBarBasicExample: React.StatelessComponent = () => {
  const [choice, setChoice] = React.useState<string | undefined>(undefined);
  const showAll = choice === 'all';

  const resetChoice = () => setChoice(undefined);

  const DefaultExample = () => (
    <MessageBar>
      Info/Default MessageBar.
      <Link href="www.bing.com" target="_blank">
        Visit our website.
      </Link>
    </MessageBar>
  );

  const ErrorExample = () => (
    <MessageBar messageBarType={MessageBarType.error} isMultiline={false} onDismiss={resetChoice} dismissButtonAriaLabel="Close">
      Error MessageBar with single line, with dismiss button.
      <Link href="www.bing.com" target="_blank">
        Visit our website.
      </Link>
    </MessageBar>
  );

  const BlockedExample = () => (
    <MessageBar
      messageBarType={MessageBarType.blocked}
      isMultiline={false}
      onDismiss={resetChoice}
      dismissButtonAriaLabel="Close"
      truncated={true}
      overflowButtonAriaLabel="See more"
    >
      <b>Blocked MessageBar - single line, with dismiss button and truncated text.</b> Truncation is not available if you use action buttons
      or multiline and should be used sparingly. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis
      tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci
      nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec
      pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque,
      laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget,
      condimentum mauris.
    </MessageBar>
  );

  const SevereExample = () => (
    <MessageBar
      messageBarType={MessageBarType.severeWarning}
      actions={
        <div>
          <MessageBarButton>Yes</MessageBarButton>
          <MessageBarButton>No</MessageBarButton>
        </div>
      }
    >
      SevereWarning MessageBar with action buttons which defaults to multiline.
      <Link href="www.bing.com" target="_blank">
        Visit our website.
      </Link>
    </MessageBar>
  );

  const SuccessExample = () => (
    <MessageBar
      actions={
        <div>
          <MessageBarButton>Yes</MessageBarButton>
          <MessageBarButton>No</MessageBarButton>
        </div>
      }
      messageBarType={MessageBarType.success}
      isMultiline={false}
    >
      Success MessageBar with single line and action buttons.
      <Link href="www.bing.com" target="_blank">
        Visit our website.
      </Link>
    </MessageBar>
  );

  const WarningExample = () => (
    <MessageBar
      messageBarType={MessageBarType.warning}
      isMultiline={false}
      onDismiss={resetChoice}
      dismissButtonAriaLabel="Close"
      actions={
        <div>
          <MessageBarButton>Action</MessageBarButton>
        </div>
      }
    >
      Warning MessageBar content.
      <Link href="www.bing.com" target="_blank">
        Visit our website.
      </Link>
    </MessageBar>
  );

  const WarningExample2 = () => (
    <MessageBar
      onDismiss={resetChoice}
      dismissButtonAriaLabel="Close"
      messageBarType={MessageBarType.warning}
      actions={
        <div>
          <MessageBarButton>Yes</MessageBarButton>
          <MessageBarButton>No</MessageBarButton>
        </div>
      }
    >
      <b>Warning defaults to multiline</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis
      tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci
      nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec
      pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque,
      laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget,
      condimentum mauris.
      <Link href="www.bing.com" target="_blank">
        Visit our website.
      </Link>
    </MessageBar>
  );

  return (
    <Stack {...horizontalStackProps}>
      <StackItem disableShrink>
        <ChoiceGroup
          label="Select a MessageBar Example Below"
          selectedKey={choice}
          // tslint:disable-next-line: jsx-no-lambda
          onChange={(e, v) => setChoice(v!.key)}
          options={[
            {
              key: 'default',
              text: 'Default'
            },
            {
              key: 'error',
              text: 'Error MessageBar'
            },
            {
              key: 'blocked',
              text: 'Blocked MessageBar'
            },
            {
              key: 'severe',
              text: 'SevereWarning MessageBar'
            },
            {
              key: 'success',
              text: 'Success MessageBar'
            },
            {
              key: 'warning',
              text: 'Warning MessageBar - single line'
            },
            {
              key: 'warning2',
              text: 'Warning MessageBar - multiline'
            },
            {
              key: 'all',
              text: 'Show All'
            }
          ]}
        />
      </StackItem>
      <Stack {...verticalStackProps}>
        {(choice === 'default' || showAll) && <DefaultExample />}

        {(choice === 'error' || showAll) && <ErrorExample />}

        {(choice === 'blocked' || showAll) && <BlockedExample />}

        {(choice === 'severe' || showAll) && <SevereExample />}

        {(choice === 'success' || showAll) && <SuccessExample />}

        {(choice === 'warning' || showAll) && <WarningExample />}

        {(choice === 'warning2' || showAll) && <WarningExample2 />}
      </Stack>
    </Stack>
  );
};
