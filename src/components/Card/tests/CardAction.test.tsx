import { CardAction } from '../';
import React from 'react';
import { configure, mount, shallow, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('CardAction component with children props', () => {
  const wrapper = shallow(
    <CardAction>Card</CardAction>
  );
  expect(wrapper.props().children).toBeDefined();
});


test('CardAction component with children props', () => {
  const wrapper = shallow(
    <CardAction style={{ color: 'red' }} />
  );
  expect(wrapper.props().style).toBeDefined();
});