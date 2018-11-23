import * as React from 'react';
import { Avatar } from '../';
import renderer from 'react-test-renderer';
import BR, { BlueRainProvider } from '@blueeast/bluerain-os';
import 'jest';
// import FolderIcon from '@material-ui/icons/Folder';
import { BluerainBoot } from '../../../utils/testBootConfig';
import console = require('console');

beforeEach(() => {
  return BluerainBoot();
});

test('Avatar component with size props', () => {
	const avatar = renderer.create(
      <BlueRainProvider><Avatar size={100} style={{width: 100, height: 100}} /></BlueRainProvider>
	).toJSON();
	expect(avatar? avatar.props.style : {}).toEqual({ width:100, height:100 });
	expect(avatar).toMatchSnapshot();
});

test('Avatar component with style', () => {
	const avatar = renderer.create(
	<BlueRainProvider><Avatar style={{ backgroundColor:'green' }}></Avatar></BlueRainProvider>
  ).toJSON();
	expect(avatar?avatar.props.style:{}).toEqual({ backgroundColor:'green' });
	expect(avatar).toMatchSnapshot();
});

test('Avatar component with src props', () => {
	const avatar = renderer.create(
		<BlueRainProvider><Avatar src="https://material-ui-next.com/static/images/remy.jpg"></Avatar></BlueRainProvider>
  ).toJSON();
	expect(avatar ? avatar.props.src : {}).toBe('https://material-ui-next.com/static/images/remy.jpg');
	expect(avatar).toMatchSnapshot();
});


// test('Avatar component with src and size props', () => {
// 	const avatar = renderer.create(
// 	<BlueRainProvider><Avatar src="https://material-ui-next.com/static/images/remy.jpg" size={200}></Avatar></BlueRainProvider>
//   ).toJSON();
// 	expect(avatar ? avatar.props.style:{}).toEqual([{ 'width':200, 'height':200, backgroundColor:'lightgrey', borderRadius:1000, display:'flex', justifyContent:'center', alignItems:'center', fontSize:.5*200 },{}]);
// 	expect(avatar ? avatar.props.source: {}).toEqual('https://material-ui-next.com/static/images/remy.jpg');

// 	expect(avatar).toMatchSnapshot();
// });



// test('Avatar component with children props', () => {
// 	const avatar = renderer.create(
//       <BlueRainProvider><Avatar size={200}>hello</Avatar></BlueRainProvider>
// 	).toJSON();
// 	expect(avatar ? avatar.props.children : {}).toEqual(undefined);
// 	expect(avatar).toMatchSnapshot();
// });
