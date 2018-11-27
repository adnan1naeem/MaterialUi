import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest';
import { ModalHeader } from '../';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });


test('ModalHeader has prop maxWidth', () => {
  const notification = shallow(
    <ModalHeader>
      "footer"
    </ModalHeader>

  );
  expect(notification.props().children).toBeDefined();
});



test('ModalHeader has prop style', () => {
  const notification = shallow(
    <ModalHeader style={{ color: 'green' }} />
  );
  expect(notification.props().style).toBeDefined();
});