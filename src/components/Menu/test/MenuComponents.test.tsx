import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';
import { Menu, MenuItem, MenuPopper, MenuList } from '../index';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });



test('Menu has  children prop', () => {
  const notification = shallow(
    <Menu open={true}>
      "Hello"
      </Menu>
  );
  expect(notification.props().children).toBeDefined();
});


test('Menu has  open prop', () => {
  const notification = shallow(
    <Menu open={true}>
      "Hello"
      </Menu>
  );
  expect(notification.props().open).toEqual(true);
});


test('MenuItem should be disabled prop', () => {
  const notification = shallow(
    <MenuItem disabled={true}>
      "Hello"
      </MenuItem>
  );
  expect(notification.props().disabled).toEqual(true);
});


test('MenuItem should be disabled prop', () => {
  const notification = shallow(
    <MenuList >
      "Hello"
      </MenuList>
  );
  expect(notification.props().children).toBeDefined();
});


test('MenuPopper should be children prop', () => {
  const notification = shallow(
    <MenuPopper open={true} >
      "Hello"
      </MenuPopper>
  );
  expect(notification.props().open).toEqual(true);
});


test('MenuPopper should be children prop', () => {
  const notification = shallow(
    <MenuPopper open={true} >
      "Hello"
      </MenuPopper>
  );
  expect(notification.props().children).toBeDefined();
});
