import { Dropdown } from '../src/components/DropDown';
import { create } from 'react-test-renderer';
import React from 'react';

test('it should show normal dropDown', () => {
	const DropdownList = create(
        <Dropdown  value={'jsbha'}   />
    ).toJSON();
	expect(DropdownList.props.autoWidth).toEqual(undefined);
	expect(DropdownList).toMatchSnapshot();
});

test('with color prop', () => {
	const DropdownList = create(
        <Dropdown  value={'jsbha'}  />
    ).toJSON();
	expect(DropdownList.props.style).toEqual(undefined);
	expect(DropdownList).toMatchSnapshot();
});