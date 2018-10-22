import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest';
import { ModalFooter } from '../';
import Button from '@material-ui/core/Button';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });


test('ModalFooter has prop maxWidth', () => {
  const notification = shallow(
    <ModalFooter>
      "footer"
    </ModalFooter>

  );
  expect(notification.props().children).toBeDefined();
});



test('ModalFooter has prop fullScreen', () => {
  const notification = shallow(
    <ModalFooter
      fullScreen={true}
    />
  );
  expect(notification.props().fullScreen).toEqual(true);
});