import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CommandBarBase } from './CommandBar.base';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as renderer from 'react-test-renderer';

import { CommandBar } from './CommandBar';
import { mount } from 'enzyme';
import { IContextualMenuItem } from '../../ContextualMenu';

describe('CommandBar', () => {
  afterEach(() => {
    for (let i = 0; i < document.body.children.length; i++) {
      if (document.body.children[i].tagName === 'DIV') {
        document.body.removeChild(document.body.children[i]);
        i--;
      }
    }
  });

  it('renders commands correctly', () => {
    expect(
      renderer
        .create(
          <CommandBar items={[{ key: '1', text: 'asdf' }, { key: '2', text: 'asdf' }]} className={'TestClassName'} />
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it('adds the correct aria-setsize and -posinset attributes to the command bar items.', () => {
    const items: IContextualMenuItem[] = [
      {
        text: 'TestText 1',
        key: 'TestKey1',
        className: 'item1',
        subMenuProps: {
          items: [
            {
              text: 'SubmenuText 1',
              key: 'SubmenuKey1',
              className: 'SubMenuClass'
            }
          ]
        }
      },
      {
        text: 'TestText 2',
        key: 'TestKey2',
        className: 'item2'
      },
      {
        text: 'TestText 3',
        key: 'TestKey3',
        className: 'item3'
      }
    ];

    const renderedContent = ReactTestUtils.renderIntoDocument<CommandBarBase>(
      <CommandBarBase items={items} />
    ) as React.Component<CommandBarBase, {}>;
    document.body.appendChild(ReactDOM.findDOMNode(renderedContent)!);

    const [item1, item2, item3] = ['.item1', '.item2', '.item3'].map(i => document.querySelector(i)!);
    expect(item1.getAttribute('aria-setsize')).toBe('3');
    expect(item2.getAttribute('aria-setsize')).toBe('3');
    expect(item3.getAttribute('aria-setsize')).toBe('3');
    expect(item1.getAttribute('aria-posinset')).toBe('1');
    expect(item2.getAttribute('aria-posinset')).toBe('2');
    expect(item3.getAttribute('aria-posinset')).toBe('3');
  });

  it('opens a menu with IContextualMenuItem.subMenuProps.items property', () => {
    const commandBar = mount(
      <CommandBar
        items={[
          {
            text: 'TestText 1',
            key: 'TestKey1',
            className: 'MenuItem',
            subMenuProps: {
              items: [
                {
                  text: 'SubmenuText 1',
                  key: 'SubmenuKey1',
                  className: 'SubMenuClass'
                }
              ]
            }
          }
        ]}
      />
    );

    const menuItem = commandBar.find('.MenuItem button');

    expect(menuItem.length).toEqual(1);

    menuItem.simulate('click');

    expect(document.querySelector('.SubMenuClass')).toBeDefined();
  });

  it('passes event and item to button onClick callbacks', () => {
    const itemData: IContextualMenuItem = {
      text: 'TestText 1',
      key: 'TestKey1',
      className: 'MenuItem',
      data: {
        foo: 'bar'
      },
      onClick: (ev, item) => {
        testValue = item;
      }
    };

    let testValue: IContextualMenuItem | undefined;
    const commandBar = mount(<CommandBar items={[itemData]} />);

    const menuItem = commandBar.find('.MenuItem button');

    menuItem.simulate('click');

    expect(testValue).toEqual(itemData);
  });

  it('keeps menu open after update if item is still present', () => {
    const commandBar = mount(
      <CommandBar
        items={[
          {
            text: 'TestText 1',
            key: 'TestKey1',
            subMenuProps: {
              items: [
                {
                  text: 'SubmenuText 1',
                  key: 'SubmenuKey1',
                  className: 'SubMenuClass'
                }
              ]
            }
          }
        ]}
      />
    );

    const menuItem = commandBar.find('button');

    menuItem.simulate('click');

    // Make sure the menu is open before the re-render
    expect(document.querySelector('.SubMenuClass')).toBeDefined();

    // Update the props, and re-render
    commandBar.setProps({
      items: commandBar.props().items.concat([
        {
          name: 'Test Key 2',
          key: 'TestKey2'
        }
      ])
    });

    // Make sure the menu is still open after the re-render
    expect(document.querySelector('.SubMenuClass')).toBeDefined();
  });

  it('closes menu after update if item is not longer present', () => {
    const commandBar = mount(
      <CommandBar
        items={[
          {
            text: 'TestText 1',
            key: 'TestKey1',
            subMenuProps: {
              items: [
                {
                  text: 'SubmenuText 1',
                  key: 'SubmenuKey1',
                  className: 'SubMenuClass'
                }
              ]
            }
          }
        ]}
      />
    );

    const menuItem = commandBar.find('button');

    menuItem.simulate('click');

    // Make sure the menu is open before the re-render
    expect(document.querySelector('.SubMenuClass')).toBeDefined();

    // Update the props, and re-render
    commandBar.setProps({
      items: []
    });

    // Make sure the menu is still open after the re-render
    expect(document.querySelector('.SubMenuClass')).toBeFalsy();
  });

  it('passes overflowButton menuProps to the menu, and prepend menuProps.items to top of overflow', () => {
    const items = [
      {
        name: 'Text1',
        key: 'Key1'
      }
    ];

    const overFlowItems = [
      {
        name: 'Text2',
        key: 'Key2'
      }
    ];

    const commandBar = mount(
      <CommandBar
        overflowButtonProps={{
          menuProps: {
            items: [{ name: 'Text3', key: 'Key3' }],
            className: 'customMenuClass'
          }
        }}
        overflowItems={overFlowItems}
        items={items}
      />
    );

    const overflowMenuButton = commandBar.find('.ms-CommandBar-overflowButton');

    overflowMenuButton.hostNodes().simulate('click');

    const overfowItems = document.querySelectorAll('.ms-ContextualMenu-item');

    expect(overfowItems).toHaveLength(2);
    expect(overfowItems[0].textContent).toEqual('Text3');
    expect(overfowItems[1].textContent).toEqual('Text2');
    expect(document.querySelectorAll('.customMenuClass')).toHaveLength(1);
  });

  it('updates menu after update if item is still present', () => {
    const items = [
      {
        name: 'TestText 1',
        key: 'TestKey1',
        subMenuProps: {
          items: [
            {
              name: 'SubmenuText 1',
              key: 'SubmenuKey1',
              className: 'SubMenuClass'
            }
          ]
        }
      }
    ];

    const commandBar = mount(<CommandBar items={items} />);

    const menuItem = commandBar.find('button');

    menuItem.simulate('click');

    // Make sure the menu is open before the re-render
    expect(document.querySelector('.SubMenuClass')).toBeDefined();

    // Update the props
    items[0].subMenuProps.items[0].className = 'SubMenuClassUpdate';

    // Re-render
    commandBar.setProps({
      items: items
    });

    // Make sure the menu is still open after the re-render
    expect(document.querySelector('.SubMenuClassUpdate')).toBeDefined();
  });
});
