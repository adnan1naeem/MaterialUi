import { List, ListHeader, ListItem, ListItemAvatar, ListItemIcon, ListItemRightButton, ListItemText } from '../src/components/List';
import { create } from 'react-test-renderer';
import Button from 'material-ui/Button';
import FolderIcon from 'material-ui-icons/Folder';
import React from 'react';


test('Lard component with style props', () => {
	const list = create(
		<List style={{ width:100 }}></List>
  ).toJSON();
	expect(list.props.style).toEqual({ width:100 });
	expect(list).toMatchSnapshot();
});

test('List component with children props', () => {
	const list = create(
		<List><div>Hello</div></List>
  ).toJSON();
	expect(list.props.children).toEqual(undefined);
	expect(list).toMatchSnapshot();
});

test('ListHeader with children props', () => {
	const listheader = create(
		<ListHeader>I am Header of list</ListHeader>
  ).toJSON();
	expect(listheader.props.children).toEqual(undefined);
	expect(listheader).toMatchSnapshot();
});

test('ListItemIcon with children props', () => {
	const listitemicon= create(
		<ListItemIcon><FolderIcon/></ListItemIcon>
  ).toJSON();
	expect(listitemicon.props.children).toEqual(undefined);
	expect(listitemicon).toMatchSnapshot();
});

test('ListItemRightButton with children props', () => {
	const listitemrightbutton= create(
		<ListItemRightButton><Button/></ListItemRightButton>
  ).toJSON();
	expect(listitemrightbutton.props.children).toEqual(undefined);
	expect(listitemrightbutton).toMatchSnapshot();
});
