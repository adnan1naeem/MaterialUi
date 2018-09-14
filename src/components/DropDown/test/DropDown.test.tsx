import { Dropdown } from '../';
import renderer from 'react-test-renderer';
import React from 'react';

test('it should show normal dropDown', () => {
	const DropdownList = renderer.create(
        <Dropdown  value={'jsbha'}   />
	).toJSON();
	expect(DropdownList.props.autoWidth).toEqual(undefined);
	expect(DropdownList).toMatchSnapshot();
});

test('with color prop', () => {
	const DropdownList =renderer.create(
        <Dropdown  value={'jsbha'}  />
    ).toJSON();
	expect(DropdownList.props.style).toEqual(undefined);
	expect(DropdownList).toMatchSnapshot();
});
test('with onSelelct prop', () => {
	const DropdownList =renderer.create(
        <Dropdown  value={'jsbha'}   />
    ).toJSON();
	expect(DropdownList.props.onSelelct).toEqual(undefined);
	expect(DropdownList).toMatchSnapshot();
});

// test('with DropDownItem ', () => {
// 	const DropdownListItem = renderer.create(
		
//         <Dropdown  value={'jsbha'}   >
// 	<DropdownItem value={'jsbha'}>Hello</DropdownItem>
// 	</Dropdown>
// 	).toJSON();
// 	console.log(DropdownListItem.props);
// 	expect(DropdownListItem.style).toEqual(undefined);
// 	expect(DropdownListItem).toMatchSnapshot();
// });

test('with onfocus ', () => {
	const DropdownListItem = renderer.create(
		
        <Dropdown  value={'jsbha'} />
	).toJSON();
	console.log(DropdownListItem.props);
	expect(DropdownListItem).toEqual(undefined);
	expect(DropdownListItem).toMatchSnapshot();
});