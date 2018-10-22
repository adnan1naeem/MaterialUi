import { Card, CardBody, CardFooter, CardHeader, CardMedia } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
import { configure, mount, shallow, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('Card component with children props', () => {
  const wrapper = shallow(
    <Card><CardBody>Card</CardBody></Card>
  );
  expect(wrapper.props().children).toBeDefined();
});


test('Card component with children props', () => {
  const wrapper = shallow(
    <Card style={{ color: 'red' }} />
  );
  expect(wrapper.props().style).toBeDefined();
});