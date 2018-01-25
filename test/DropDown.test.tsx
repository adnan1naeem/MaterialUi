import React from 'react';
import { create } from 'react-test-renderer';
import { DropDown } from '../src/components/DropDown';

test('it should show normal dropDown', () => {
	const Dropdown = create(
        <DropDown  value={'jsbha'}   />
    ).toJSON();
	expect(Dropdown.props.autoWidth).toEqual(undefined);
	expect(Dropdown).toMatchSnapshot();
});

test('with color prop', () => {
	const Dropdown = create(
        <DropDown  value={'jsbha'}  />
    ).toJSON();
	expect(Dropdown.props.style).toEqual(undefined);
	expect(Dropdown).toMatchSnapshot();
});