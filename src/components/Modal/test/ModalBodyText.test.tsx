import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest';
import { ModalBodyText } from '../index';
import Button from '@material-ui/core/Button';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });


test('ModalBodyText has prop maxWidth', () => {
  const notification = shallow(
    <ModalBodyText>
      "footer"
    </ModalBodyText>

  );
  expect(notification.props().children).toBeDefined();
});



test('ModalBodyText has prop style', () => {
  const notification = shallow(
    <ModalBodyText
      style={{
        color: 'gree'
      }}
    />
  );
  expect(notification.props().style).toBeDefined();
});