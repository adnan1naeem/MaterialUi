import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest';
import { ModalBody } from '../index';
import Button from '@material-ui/core/Button';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });


test('Modal has prop maxWidth', () => {
  const notification = shallow(
    <ModalBody
      fullWidth={true}
      maxWidth="xs"
    />
  );
  expect(notification.props().maxWidth).toEqual('xs');
});



test('Modal has prop fullScreen', () => {
  const notification = shallow(
    <ModalBody
      fullScreen={true}
    />
  );
  expect(notification.props().fullScreen).toEqual(true);
});