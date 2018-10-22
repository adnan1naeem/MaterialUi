import { Card, CardBody, CardFooter, CardHeader, CardMedia } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
import { configure, mount, shallow, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('CardBody component with children props', () => {
  const wrapper = shallow(
    <CardFooter>CardFooter</CardFooter>
  );
  expect(wrapper.props().children).toBeDefined();
});


test('CardBody component with children props', () => {
  const wrapper = shallow(
    <CardFooter style={{ color: 'red' }} />
  );
  expect(wrapper.props().style).toBeDefined();
});