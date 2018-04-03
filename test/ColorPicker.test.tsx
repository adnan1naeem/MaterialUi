// import { ColorPicker } from '../src/components/ColorPicker';
// import { create } from 'react-test-renderer';
// import React from 'react';

// test('ColorPicker with hs true', () => {
// 	const cPicker = create(
//       <ColorPicker hs={true} value={{ h:120, s:1, l: 0.5 }} />
//   ).toJSON();
// 	expect(cPicker.props.hs).toEqual(undefined);
// 	expect(cPicker).toMatchSnapshot();
// });

import { Button } from '../src/components/Button';
import { create } from 'react-test-renderer';
import React from 'react';

test('Button with fab true', () => {
	const button = create(
      <Button fab={true}></Button>
  ).toJSON();
	console.log(button);
	expect(button.props.className).toEqual('MuiButtonBase-root-16 MuiButton-root-1 MuiButton-raised-8 MuiButton-fab-14');
	expect(button).toMatchSnapshot();
});

test('Button component with style', () => {
	const button = create(
      <Button style={{ backgroundColor:'green' }}></Button>
  ).toJSON();
	expect(button.props.style).toEqual({ backgroundColor:'green' });
	expect(button).toMatchSnapshot();
});

test('Button component with color accent', () => {
	const button = create(
      <Button color="accent"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with onClick', () => {
	const button = create(
      <Button onPress={console.log('Heelloo')}></Button>
  ).toJSON();
	expect(button.props.onClick).toEqual(console.log('Heelloo'));
	expect(button).toMatchSnapshot();
});

test('Button component with iconLeft', () => {
	const button = create(
      <Button iconLeft={true}></Button>
  ).toJSON();
	expect(button.props.iconLeft).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconRight', () => {
	const button = create(
      <Button iconRight={true}></Button>
  ).toJSON();
	expect(button.props.iconRight).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconRight and color', () => {
	const button = create(
      <Button iconRight={true} color="default"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconLeft and color', () => {
	const button = create(
      <Button iconLeft={true} color="default"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconLeft and color=primary', () => {
	const button = create(
      <Button iconLeft={true} color="primary"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconLeft and color=accent', () => {
	const button = create(
      <Button iconLeft={true} color="accent"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconLeft and color=contrast', () => {
	const button = create(
      <Button iconLeft={true} color="contrast"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconRight and color=primary', () => {
	const button = create(
      <Button iconRight={true} color="primary"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconRight and color=accent', () => {
	const button = create(
      <Button iconRight={true} color="accent"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconRight and color=contrast', () => {
	const button = create(
      <Button iconRight={true} color="contrast"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component color=primary', () => {
	const button = create(
      <Button color="primary"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with color=accent', () => {
	const button = create(
      <Button color="accent"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with color=contrast', () => {
	const button = create(
      <Button color="contrast"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconRight and color=link', () => {
	const button = create(
      <Button iconRight={true} color="link"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with color=link', () => {
	const button = create(
      <Button color="link"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});

test('Button component with iconLeft and color=link', () => {
	const button = create(
      <Button iconLeft={true} color="link"></Button>
  ).toJSON();
	expect(button.props.color).toEqual(undefined);
	expect(button).toMatchSnapshot();
});