import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest';
import { Slider } from '../index';
import Button from '@material-ui/core/Button';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });



test('Slider has  max prop', () => {
  const notification = shallow(
    <Slider max={20} />

  );
  expect(notification.props().max).toEqual(20);
});


test('Slider has  min prop', () => {
  const notification = shallow(
    <Slider min={0} />

  );
  expect(notification.props().min).toEqual(0);
});


test('Slider has  disabled prop', () => {
  const notification = shallow(
    <Slider disabled={true} />

  );
  expect(notification.props().disabled).toEqual(true);
});


test('Slider has  vertical prop', () => {
  const notification = shallow(
    <Slider vertical={true} />

  );
  expect(notification.props().vertical).toEqual(true);
});