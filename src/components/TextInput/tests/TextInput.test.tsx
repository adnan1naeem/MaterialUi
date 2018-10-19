import { TextInput } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
import "jest";
function handleTextInputChange () {
	console.log('I am clicked');
}
test('TextInput component with default values', () => {
	const textInput = renderer.create(
		<TextInput placeholder="hello" defaultValue="nooo" onChange={handleTextInputChange} autoComplete="Hello World !!" autoFocus={true} />
	).toJSON();
	expect(textInput.props.style).toEqual(undefined);
	expect(textInput).toMatchSnapshot();
});
test('TextInput component with editable true', () => {
	const textInput = renderer.create(
		<TextInput placeholder="hello" editable={false} defaultValue="nooo" onChange={handleTextInputChange} autoComplete="Hello World !!" autoFocus={true} />
	).toJSON();
	expect(textInput.props.editable).toBe(false);
	expect(textInput).toMatchSnapshot();
});
test('TextInput component with onChangeText', () => {
	const textInput = renderer.create(
		<TextInput placeholder="hello" editable={false} defaultValue="nooo" onChangeText={handleTextInputChange} autoComplete="Hello World !!" autoFocus={true} />
	).toJSON();
	expect(textInput.props.onChangeText).toEqual(undefined);
	expect(textInput).toMatchSnapshot();
});
