import * as React from 'react';
import { Drawer } from '../../Drawer';
import { storiesOf } from '@storybook/react';
import DrawerTest from './DrawerTest.component';

const stories = storiesOf('Drawer', module);
const AppBarStoriesStyle = {
	backgroundColor: 'transparent',
	boxShadow: 'none',
	border: 0
};

stories.add('Drawer open with anchor="right"', () => {
	return (
		<Drawer
			variant="persistent"
			open={true}
			tweenDuration={1000}
			anchor="right"
			style={AppBarStoriesStyle}
		>
			<div>YOLO</div>
		</Drawer>
	);
});
stories.add('Drawer open with variant="permanent"', () => {
	return (
		<Drawer
			variant="permanent"
			open={true}
			tweenDuration={1000}
			side="left"
			style={AppBarStoriesStyle}
		>
			<div>YOLO</div>
		</Drawer>
	);
});

stories.add('Permanent Drawer StateFull with changable side', () => {
	return (
		<DrawerTest variant="permanent" />
	);
});

stories.add('Persistent Drawer StateFull with changable side aswell as open the drawer', () => {
	return (
		<DrawerTest variant="persistent" />
	);
});

stories.add('Temporary Drawer StateFull with changable side aswell as open the drawer', () => {
	return (
		<DrawerTest variant="temporary" />
	);
});
