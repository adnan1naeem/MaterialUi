import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../';
import Button from '@material-ui/core/Button';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });

test('render correctly', () => {
  const notification = shallow(
    <Modal>
      <ModalHeader>
        UserLocation Service
    </ModalHeader>
      <ModalBody>
        Let Google help apps determine location. This means sending anonymous location data to
        Google, even when no apps are running.
    </ModalBody>
      <ModalFooter>
        <Button onClick={() => { ' '; }} color="primary">
          Disagree
      </Button>
        <Button onClick={() => { ' '; }} color="primary" >
          Agree
      </Button>
        <Button onClick={() => { ' '; }} color="primary">
          Disagree
      </Button>
        <Button onClick={() => { ' '; }} color="primary" >
          Agree
      </Button>
      </ModalFooter>
    </Modal>
  );
  expect(notification).toMatchSnapshot();
});

test('render correctly', () => {
  const notification = shallow(
    <Modal>
      <ModalHeader>
        UserLocation Service
    </ModalHeader>
      <ModalBody>
        Let Google help apps determine location. This means sending anonymous location data to
        Google, even when no apps are running.
    </ModalBody>
      <ModalFooter>
        <Button onClick={() => { ' '; }} color="primary">
          Disagree
      </Button>
        <Button onClick={() => { ' '; }} color="primary" >
          Agree
      </Button>
        <Button onClick={() => { ' '; }} color="primary">
          Disagree
      </Button>
        <Button onClick={() => { ' '; }} color="primary" >
          Agree
      </Button>
      </ModalFooter>
    </Modal>
  );
  expect(notification).toMatchSnapshot();
});

test('Modal has prop fullScreen', () => {
  const notification = shallow(
    <Modal
      fullScreen={true}
    />
  );
  expect(notification.props().fullScreen).toEqual(true);
});



test('Modal has prop maxWidth', () => {
  const notification = shallow(
    <Modal
      fullWidth={true}
      maxWidth="xs"
    />
  );
  expect(notification.props().maxWidth).toEqual('xs');
});



test('Modal has prop fullScreen', () => {
  const notification = shallow(
    <Modal
      fullScreen={true}
    />
  );
  expect(notification.props().fullScreen).toEqual(true);
});

