import * as React from 'react';
import { Avatar } from '../';
import renderer from 'react-test-renderer';
import BR, { BlueRainProvider } from '@blueeast/bluerain-os';
import 'jest';
import Adapter from 'enzyme-adapter-react-16';

import { BluerainBoot } from '../../../utils/testBootConfig';
import { configure, shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() });

beforeEach(() => {
	return BluerainBoot();
});

test('Avatar component with size props', () => {

	const wrapper = mount(
		<BlueRainProvider><Avatar size={100} style={{ width: 100, height: 100 }} /></BlueRainProvider>
	);

	expect(wrapper.props().children.props.style).toEqual({ width: 100, height: 100 });
});

test('Avatar component with style', () => {
	const wrapper = mount(
		<BlueRainProvider>
			<Avatar size={100} style={{ backgroundColor: 'green' }} /></BlueRainProvider>
	);
	expect(wrapper.props().children.props.style).toEqual({ backgroundColor: 'green' });
});

test('Avatar component with src props', () => {

	const wrapper = mount(
		<BlueRainProvider><Avatar src="https://material-ui-next.com/static/images/remy.jpg" /></BlueRainProvider>
	);
	expect(wrapper.props().children.props.src).toEqual('https://material-ui-next.com/static/images/remy.jpg');

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
