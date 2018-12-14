import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';
import renderer from 'react-test-renderer';
import { AppBar } from '../index';
import 'jest';
import { configure, mount, shallow, } from 'enzyme';

configure({ adapter: new Adapter() });

test('AppBar component with position prop', () => {
	const appBar = shallow(
      <AppBar position="static"></AppBar>
  );
	expect(appBar.props().position).toBeUndefined();
	expect(appBar).toMatchSnapshot();
});

test('AppBar component with style', () => {
	const appBar = shallow(
      <AppBar style={{ 'background-color':'green' }}></AppBar>
  );
	expect(appBar.props().style).toBeUndefined();
	expect(appBar).toMatchSnapshot();
});

test('AppBar component with children', () => {
	const appBar = shallow(
      <AppBar style={{ 'background-color':'green' }} left="Hello" >Hello</AppBar>
  );
	expect(appBar.props().left).toBeUndefined();
	expect(appBar).toMatchSnapshot();
});