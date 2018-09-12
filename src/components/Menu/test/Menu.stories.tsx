import Input, { InputLabel } from 'material-ui/Input';
import { ListItem } from '../../List';
import { Menu, MenuItem } from '../index';
import { Button } from '../../Button';
import { storiesOf } from '@storybook/react';
import FadeMenu from './MenuTest1.component';
import MenuPopper from '../MenuPopper.component';
import Paper from 'material-ui/Paper';
import React from 'react';

const stories = storiesOf('Menu', module);

const onChange = (event:any) => {
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
	}, {
		title: 'My account',
		onClick: () => console.log('My account Clicked'),
		style: {},
		otherProps: {}
	}, {
		title: 'Logout',
		onClick: () => console.log('Logout Clicked'),
		style: {},
		otherProps: {}
	}
];

stories.add('Menu Popper List Component', () => {
	return (
		<div >
			<MenuPopper
				style={{ width: 200 }}
				menuItems={menuItems}
				component={
					(handleOpen: any) => (
						<ListItem
							button
              onClick={handleOpen}
              avatar='https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg'
              avatarSize={30}
              primary='hello'
						/>
					)
				}
			/>
		</div>
	);
});

stories.add('Menu Popper List Component placement right', () => {
	return (
		<div >
			<MenuPopper
				style={{ width: 200 }}
				menuItems={menuItems}
				placement="right-end"
				component={
					(handleOpen: any) => (
						<ListItem
							button
              onClick={handleOpen}
              avatar='https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg'
              avatarSize={30}
              primary='hello'
						/>
					)
				}
			/>
		</div>
	);
});

stories.add('Menu Popper Button Component', () => {
	return (
		<div style={{ width: 200, height: 100, marginTop: 200 }}>
			<MenuPopper
				style={{ width: 200 }}
				menuItems={menuItems}
				component={
					(handleOpen: any) => (
						<Button onPress={handleOpen} style={{ width: 200, height: 100 }}>
							Click Me
						</Button>
					)
				}
			/>
		</div>
	);
});

stories.add('Menu Popper Button Component placement right', () => {
	return (
		<div style={{ width: 200, height: 100, marginTop: 200 }}>
			<MenuPopper
				style={{ width: 200 }}
				menuItems={menuItems}
				placement="right"
				component={
					(handleOpen: any) => (
						<Button onPress={handleOpen} style={{ width: 200, height: 100 }}>
							Click Me
						</Button>
					)
				}
			/>
		</div>
	);
});
