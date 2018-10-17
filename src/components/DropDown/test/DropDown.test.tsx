import { Dropdown } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, } from 'enzyme';

configure({ adapter: new Adapter() });

test('it should show normal dropDown', () => {
  const DropdownList = shallow(
    <Dropdown value={'jsbha'} />
  );
  expect(DropdownList.props().value).toEqual('jsbha');
});




test('it should show dropdown with autoWidth true', () => {
  const DropdownList = shallow(
    <Dropdown autoWidth={true} />
  );
  expect(DropdownList.props().autoWidth).toEqual(true);
});


test('it should  disable dropdown with true prop', () => {
  const DropdownList = shallow(
    <Dropdown disabled={true} />
  );
  expect(DropdownList.props().disabled).toEqual(true);
});

test('it should  disable dropdown with true prop', () => {
  const DropdownList = shallow(
    <Dropdown disabled={true} />
  );
  expect(DropdownList.props().disabled).toEqual(true);
});

test('it should add multiple items with this props', () => {
  const DropdownList = shallow(
    <Dropdown multiple={true} />
  );
  expect(DropdownList.props().multiple).toEqual(true);
});
