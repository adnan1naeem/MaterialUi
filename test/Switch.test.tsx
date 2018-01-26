import { create } from 'react-test-renderer';
import React from 'react';
import Switch from '../src/components/Switch';

function handleTextInputChange () {
	console.log('I am clicked');
}
test('Switch component with no props', () => {
	const switchComponent = create(
		<Switch />
	).toJSON();
	expect(switchComponent.props.style).toEqual(undefined);
	expect(switchComponent).toMatchSnapshot();
});
