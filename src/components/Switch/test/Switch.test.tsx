
import React from 'react';
import  Adapter from 'enzyme-adapter-react-16';
import  renderer  from 'react-test-renderer';
import { Switch } from '../';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });
import 'jest';

function handleTextInputChange () {
	console.log('I am clicked');
}
test('Switch component with no props', () => {
	const switchComponent = shallow(
		<Switch  checked={true}/>
	);
	console.log(switchComponent.props,'checked');
	expect(switchComponent.props().checked).toBe(true);
	expect(switchComponent).toMatchSnapshot();
});

