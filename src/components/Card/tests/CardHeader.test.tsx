import { Card, CardBody, CardFooter, CardHeader, CardMedia } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
import { configure, mount, shallow, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('CardHeader component with children props', () => {
  const wrapper = shallow(
    <CardHeader>Header</CardHeader>
  );
  expect(wrapper.props().children).toBeDefined();
});


test('CardHeader component with children props', () => {
  const wrapper = shallow(
    <CardHeader style={{ color: 'red' }} />
  );
  expect(wrapper.props().style).toBeDefined();
});



test('CardHeader component with content props', () => {
  const wrapper = shallow(
    <CardHeader content="Card" />
  );
  expect(wrapper.props().content).toEqual('Card');
});


test('CardHeader component with avatar props', () => {
  const wrapper = shallow(
    <CardHeader avatar="" />
  );
  expect(wrapper.props().content).toEqual('');
});


test('CardHeader component with avatar props', () => {
  const wrapper = shallow(
    <CardHeader title="CardHeader" />
  );
  expect(wrapper.props().title).toEqual('CardHeader');
});


test('CardHeader component with disableTypography props', () => {
  const wrapper = shallow(
    <CardHeader disableTypography={false} />
  );
  expect(wrapper.props().disableTypography).toEqual(false);
});