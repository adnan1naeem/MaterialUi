import * as React from 'react';
import { AppBar } from '../../AppBar';
import { Button } from '../../Button';
import { storiesOf } from '@storybook/react';
import AssignmentIcon from 'material-ui-icons/Assignment';

const stories = storiesOf('AppBar', module);
const AppBarStoriesStyle = {
	backgroundColor: 'transparent',
	boxShadow: 'none',
	border: 0
};

stories.add('AppBar with primary color and position="fixed"', () => {
	return (
    <AppBar position="fixed" color="primary" style={{ backgroundColor: 'red' }}>
      <Button style={AppBarStoriesStyle}>
        <AssignmentIcon />
      </Button>
      <h3 style={{ display: 'flex', flex: 1 }}>Title</h3>
      <Button color="primary">Login</Button>
    </AppBar>
	);
});

stories.add('AppBar with position static and default color', () => {
	return (
    <AppBar position="static" color="default">
      <Button style={AppBarStoriesStyle}>
        <AssignmentIcon />
      </Button>
      <h3 style={{ display: 'flex', flex: 1 }}>Title</h3>
      <Button color="default">Login</Button>
    </AppBar>
	);
});

stories.add('AppBar with primary color and  position="absolute"', () => {
	return (
    <AppBar position="absolute" color="primary">
      <Button style={AppBarStoriesStyle}>
        <AssignmentIcon />
      </Button>
      <h3 style={{ display: 'flex', flex: 1 }}>Title</h3>
      <Button color="secondary">Login</Button>
    </AppBar>
	);
});

stories.add('AppBar with accent color', () => {
	return (
    <AppBar color="accent">
      <Button style={AppBarStoriesStyle}>
        <AssignmentIcon />
      </Button>
      <h3 style={{ display: 'flex', flex: 1 }}>Title</h3>
      <Button color="accent">Login</Button>
    </AppBar>
	);
});
