import * as React from 'react';
import { AppBar } from '../src/components/AppBar';
import { create } from 'react-test-renderer';

test('AppBar component with position prop', () => {
	const appBar = create(
      <AppBar position="static"></AppBar>
  ).toJSON();
	expect(appBar.props.style).toEqual(undefined);
	expect(appBar).toMatchSnapshot();
});

test('AppBar component with style', () => {
	const appBar = create(
      <AppBar style={{ 'background-color':'green' }}></AppBar>
  ).toJSON();
	expect(appBar.props.style).toEqual({ 'background-color':'green' });
	expect(appBar).toMatchSnapshot();
});