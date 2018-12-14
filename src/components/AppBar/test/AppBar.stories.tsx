import * as React from 'react';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AppBar } from '../../AppBar';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
// import { Button } from '../../Button';

const stories = storiesOf('AppBar', module);
const AppBarStoriesStyle = {
	backgroundColor: 'transparent',
	boxShadow: 'none',
	border: 0
};

stories.addDecorator(withKnobs).add('AppBar with primary color and position="fixed"', () => {
	return (
		<AppBar left={<Button style={AppBarStoriesStyle}>
			<MenuIcon />
		</Button>}
			title={text('Title', 'title')}
			right={<Button color="primary">Login</Button>}
			position="fixed"
			color="primary"
			style={{ backgroundColor: 'red' }}>
		</AppBar>
	);
});
stories.addDecorator(withKnobs).add('AppBar with primary color, position fixed and right elements"', () => {
	return (
		<AppBar left={<Button style={AppBarStoriesStyle}>
			<MenuIcon />
		</Button>}
			title={text('Title', 'title')}
			right={
				<IconButton color="inherit">
					<Badge badgeContent={17} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>}
			position="fixed"
			color="primary"
			style={{ backgroundColor: 'red' }}>
		</AppBar>
	);
});

stories.add('AppBar with primary color and  position="absolute"', () => {
	return (
		<AppBar position="absolute" left={<Button style={AppBarStoriesStyle}>
			<MenuIcon />
		</Button>} title={'Title'} right={<Button color="secondary">Login</Button>} color="primary" />

	);
});
stories.add('AppBar with positiion="sticky"', () => {
	return (
		<AppBar position="sticky" left={<Button style={AppBarStoriesStyle}>
			<MenuIcon />
		</Button>} title={'Title'} right={<Button color="secondary">Login</Button>} color="primary" />

	);
});

stories.add('AppBar with inherit color', () => {
	return (
		<AppBar color="inherit" left={<Button style={AppBarStoriesStyle}><MenuIcon /></Button>} title={'Title'} right={<Button color="primary">Login</Button>} />

	);
});
stories.add('AppBar with default color', () => {
	return (
		<AppBar color="default" left={<Button style={AppBarStoriesStyle}><MenuIcon /></Button>} title={'Title'} right={<Button color="primary">Login</Button>} />

	);
});

stories.add('AppBar without right prop', () => {
	return (
		<AppBar left={<Button style={AppBarStoriesStyle}><MenuIcon /></Button>} title={'Title'} />
	);
});

stories.add('AppBar without  left prop', () => {
	return (
		<AppBar title={'Title'} right={<Button color="primary">Login</Button>} />

	);
});
stories.add('AppBar without title & position', () => {
	return (
		<AppBar left={<Button style={AppBarStoriesStyle}><MenuIcon /></Button>} right={<Button color="primary">Login</Button>} />
	);
});
stories.add('AppBar with color="secondary" & position="absolute"', () => {
	return (
		<AppBar color="secondary" position="absolute" left={<Button style={AppBarStoriesStyle}><MenuIcon /></Button>} right={<Button color="primary">Login</Button>} />
	);
});