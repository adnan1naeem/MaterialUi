import Input, { InputLabel } from 'material-ui/Input';
import { Menu, MenuItem } from '../index';
import { storiesOf } from '@storybook/react';
import FadeMenu from './MenuTest1.component';
import MenuPopper from '../MenuPopper.component';
import Paper from 'material-ui/Paper';
import React from 'react';

const stories = storiesOf('Menu', module);

const onChange = (event) => {
	const value = event.target.value;
};
const style = { root: { padding: 20 }, dropdown: { width: 400 } };
const multiItems = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder'
];

stories.add('Menu Closed', () => {
	return (
		<Paper style={style.root}>
			<Menu open={false} style={style.dropdown}>
				<MenuItem value="xyz">Item 1 </MenuItem>
				<MenuItem value="abc">Item 2 </MenuItem>
				<MenuItem value="abc">Item 3 </MenuItem>
				<MenuItem value="abc">Item 4 </MenuItem>
				<MenuItem value="abc">Item 5 </MenuItem>
			</Menu>
		</Paper>);
}
);

stories.add('Dropdown with autoWidth', () => {
	return (
		<Paper style={style.root}>
			<Menu open={true} style={style.dropdown}>
				<MenuItem value="xyz">Item 1 </MenuItem>
				<MenuItem value="abc">Item 2 </MenuItem>
				<MenuItem value="abc">Item 3 </MenuItem>
				<MenuItem value="abc">Item 4 </MenuItem>
				<MenuItem value="abc">Item 5 </MenuItem>
			</Menu>
		</Paper>);
}
);

stories.add('Dropdown with Override styles', () => {
	return (
		<Paper style={style.root}>
			<Menu style={{ width: 600, backgroundColor: 'green' }} open={true}>
				<MenuItem value="xyz">Item 1 </MenuItem>
				<MenuItem value="abc">Item 2 </MenuItem>
				<MenuItem value="abc">Item 3 </MenuItem>
				<MenuItem value="abc">Item 4 </MenuItem>
				<MenuItem value="abc">Item 5 </MenuItem>
			</Menu>
		</Paper>);
}
);

stories.add('Menu with disabled', () => {
	return (
		<Paper style={style.root}>
			<Menu style={style.dropdown} open={true}>
				<MenuItem value="xyz">Item 1 </MenuItem>
				<MenuItem disabled value="abc">Item 2</MenuItem>
				<MenuItem disabled value="abc">Item 3 </MenuItem>
				<MenuItem value="abc">Item 4 </MenuItem>
				<MenuItem value="abc">Item 5 </MenuItem>
			</Menu>
		</Paper>);
}
);

stories.add('Menu Component', () => {
	return (
		<FadeMenu />
	);
}
);

const menuItems = [
	{
		title: 'Profile',
		onClick: () => console.log('Profile Clicked'),
		style: {},
		otherProps: {}
	},{
		title: 'My account',
		onClick: () => console.log('My account Clicked'),
		style: {},
		otherProps: {}
	},{
		title: 'Logout',
		onClick: () => console.log('Logout Clicked'),
		style: {},
		otherProps: {}
	}
];

stories.add('Menu Popper Button Component', () => {
	return (
		<div style={{ width: 200, height: 100, marginTop: 200 }}>
			<MenuPopper type='button' label={"HII"} buttonProps={{ style:{ width: 200, height: 100 } }} menuItems={menuItems} />
		</div>
	);
});

stories.add('Menu Popper list-item Component', () => {
	return (
		<div style={{ width: 200, height: 100, marginTop: 200 }}>
			<MenuPopper type='list-item' label={"HII"} listItemProps={{ style:{ width: 200, height: 100 } }} menuItems={menuItems} />
		</div>
	);
});

stories.add('Menu Popper list-item Component with placement', () => {
	return (
		<div style={{ width: 200, height: 100, marginTop: 200 }}>
			<MenuPopper type='list-item' label={"HII"} listItemProps={{ style:{ width: 200, height: 50 } }} menuItems={menuItems} placement={'top-end'} />
		</div>
	);
});

stories.add('Menu Popper list-item Component with desired placement', () => {
	return (
		<div style={{ width: 200, height: 100, marginTop: 200 }}>
			<MenuPopper type='list-item' label={"HII"} listItemProps={{ style:{ width: 200, height: 50 } }} menuItems={menuItems} placement={'right-end'} />
		</div>
	);
});
