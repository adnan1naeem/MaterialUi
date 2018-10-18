import { Card, CardBody, CardFooter, CardHeader, CardMedia } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
import { configure, mount, shallow, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('CardMedia component with src props', () => {
  const wrapper = shallow(
    <CardMedia src="" />
  );
  expect(wrapper.props().src).toBeDefined();
});


test('CardHeader component with children props', () => {
  const wrapper = shallow(
    <CardHeader style={{ color: 'red' }} />
  );
  expect(wrapper.props().style).toBeDefined();
});


