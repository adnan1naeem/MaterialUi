
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Switch } from '../';
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
	console.log(switchComponent.props, 'checked');
	expect(switchComponent.props().checked).toBe(true);
});


test('Switch component with color props', () => {
	const switchComponent = shallow(
		<Switch color="primary" />
	);
	console.log(switchComponent.props, 'checked');
	expect(switchComponent.props().color).toEqual('primary');
});


test('Switch component with disabled props', () => {
	const switchComponent = shallow(
		<Switch disabled={true} />
	);
	console.log(switchComponent.props, 'checked');
	expect(switchComponent.props().disabled).toEqual(true);
});


test('Switch component with disableRipple props', () => {
	const switchComponent = shallow(
		<Switch disableRipple={false} />
	);
	console.log(switchComponent.props, 'checked');
	expect(switchComponent.props().disableRipple).toEqual(false);
});

test('Switch component with checked props', () => {
	const switchComponent = shallow(
		<Switch checkedIcon={true} />
	);
	console.log(switchComponent.props, 'checked');
	expect(switchComponent.props().checkedIcon).toEqual(true);
});





