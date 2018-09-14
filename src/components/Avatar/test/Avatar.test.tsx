import * as React from 'react';
import { Avatar } from '../';
import renderer from 'react-test-renderer';
import FolderIcon from 'material-ui-icons/Folder';

test('Avatar component with size props', () => {
	const avatar = renderer.create(
      <Avatar size={100}></Avatar>
	).toJSON();
	expect(avatar.props.style).toEqual([{ 'width':100, 'height':100, backgroundColor:'lightgrey', borderRadius:1000, display:'flex', justifyContent:'center', alignItems:'center', fontSize:.5*100 },{}]);
	expect(avatar).toMatchSnapshot();
});

test('Avatar component with style', () => {
	const avatar = renderer.create(
      <Avatar style={{ backgroundColor:'green' }}></Avatar>
  ).toJSON();
	expect(avatar?avatar.props.style:{}).toEqual([{ 'width':70, 'height':70, backgroundColor:'lightgrey', borderRadius:1000, display:'flex', justifyContent:'center', alignItems:'center', fontSize:.5*70 },{ backgroundColor:'green' }]);
	expect(avatar).toMatchSnapshot();
});

test('Avatar component with src props', () => {
	const avatar = renderer.create(
      <Avatar src="https://material-ui-next.com/static/images/remy.jpg"></Avatar>
  ).toJSON();
	expect(avatar.props.source).toEqual('https://material-ui-next.com/static/images/remy.jpg');
	expect(avatar).toMatchSnapshot();
});


test('Avatar component with src and size props', () => {
	const avatar = renderer.create(
      <Avatar src="https://material-ui-next.com/static/images/remy.jpg" size={200}></Avatar>
  ).toJSON();
	expect(avatar.props.style).toEqual([{ 'width':200, 'height':200, backgroundColor:'lightgrey', borderRadius:1000, display:'flex', justifyContent:'center', alignItems:'center', fontSize:.5*200 },{}]);
	expect(avatar.props.source).toEqual('https://material-ui-next.com/static/images/remy.jpg');

	expect(avatar).toMatchSnapshot();
});



test('Avatar component with children props', () => {
	const avatar = renderer.create(
      <Avatar size={200}>hello</Avatar>
	).toJSON();
	expect(avatar.props.children).toEqual(undefined);
	expect(avatar).toMatchSnapshot();
});
