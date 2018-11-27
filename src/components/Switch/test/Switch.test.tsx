
import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '../Switch.component';
import Adapter from 'enzyme-adapter-react-16';

import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });
import 'jest';

function handleTextInputChange() {
	console.log('I am clicked');
}
test('Switch component with checked props', () => {
	const switchComponent = shallow(
		<Switch checked={true} />
	);
	expect(switchComponent.props().checked).toBe(true);
});


test('Switch component with color props', () => {
	const switchComponent = shallow(
		<Switch color="primary" />
	);
	expect(switchComponent.props().color).toEqual('primary');
});


test('Switch component with disabled props', () => {
	const switchComponent = shallow(
		<Switch disabled={true} />
	);
	expect(switchComponent.props().disabled).toEqual(true);
});


test('Switch component with disableRipple props', () => {
	const switchComponent = shallow(
		<Switch disableRipple={false} />
	);
	expect(switchComponent.props().disableRipple).toEqual(false);
});

test('Switch component with checked props', () => {
	const switchComponent = shallow(
		<Switch checkedIcon={true} />
	);
	expect(switchComponent.props().checkedIcon).toEqual(true);
});





