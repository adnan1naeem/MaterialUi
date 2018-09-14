import React from 'react';
import  Adapter from 'enzyme-adapter-react-16';
import  renderer  from 'react-test-renderer';
import {Modal,ModalBody,ModalFooter,ModalHeader} from '../';
import {Button} from '../../Button';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });
test('render correctly', () => {
	const notification= shallow(
    <Modal>
    <ModalHeader>
    UserLocation Service
    </ModalHeader>
    <ModalBody>
      Let Google help apps determine location. This means sending anonymous location data to
      Google, even when no apps are running.
    </ModalBody>
    <ModalFooter>

    <Button onPress={()=>{}} color="primary">
        Disagree
      </Button>
      <Button onPress={()=>{}}  color="primary" >
        Agree
      </Button>
      <Button onPress={()=>{}}  color="primary">
        Disagree
      </Button>
      <Button onPress={()=>{}}  color="primary" >
        Agree
      </Button>
    </ModalFooter>
  </Modal>
	);
	expect(notification).toBeDefined();
	expect(notification).toMatchSnapshot();
});