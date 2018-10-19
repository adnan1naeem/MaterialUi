import { List, ListSubheader, ListItem } from '../';
import { Avatar } from '../../Avatar';
import renderer from 'react-test-renderer';
import React from 'react';


test('List component with style props', () => {
	const list = renderer.create(
		<List style={{ width: 100 }}></List>
	).toJSON();
	expect(list.props.style).toEqual({ width: 100 });
	expect(list).toMatchSnapshot();
});

test('List component with children props', () => {
	const list = renderer.create(
		<List><div>Hello</div></List>
	).toJSON();
	expect(list.props.children).toEqual(undefined);
	expect(list).toMatchSnapshot();
});

test('ListSuheader with children props', () => {
	const listheader = renderer.create(
		<ListSubheader>I am Header of list</ListSubheader>
	).toJSON();
	expect(listheader.props.children).toEqual(undefined);
	expect(listheader).toMatchSnapshot();
});

test('ListItem  with children props', () => {
	const listitem = renderer.create(
		<ListItem>Hello</ListItem>
	).toJSON();
	expect(listitem.props.children).toEqual(undefined);
	expect(listitem).toMatchSnapshot();
});


test('ListItem with   style props', () => {
	const listitem = renderer.create(
		<ListItem style={{ width: 100 }} />
	).toJSON();
	expect(listitem.props.style).toEqual({ width: 100 });
	expect(listitem).toMatchSnapshot();
});

test('ListItem with primary props', () => {
	const listitem = renderer.create(
		<ListItem primary="hello">Hello</ListItem>
	).toJSON();
	expect(listitem.props.primary).toEqual('hello');
	expect(listitem).toMatchSnapshot();
});

test('ListItem with secondary props', () => {
	const listitem = renderer.create(
		<ListItem secondary="Hi">Hello</ListItem>
	).toJSON();
	expect(listitem.props.secondary).toEqual('Hi');
	expect(listitem).toMatchSnapshot();
});
