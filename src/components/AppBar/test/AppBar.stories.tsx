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
    <AppBar left={<Button fab={true}  style={AppBarStoriesStyle}>
    <AssignmentIcon />
  </Button>} title={'Title'} right={<Button color="primary">Login</Button>} position="fixed" color="primary" style={{ backgroundColor: 'red' }}>    
    </AppBar>
	);
});

stories.add('AppBar with primary color and  position="absolute"', () => {
	return (
    <AppBar position="absolute" left={<Button fab={true} style={AppBarStoriesStyle}>
		<AssignmentIcon />
	</Button>} title={'Title'} right={<Button color="secondary">Login</Button>} color="primary"/>

	);
});

stories.add('AppBar with accent color', () => {
	return (
    <AppBar color="accent" left={<Button fab={true} style={AppBarStoriesStyle}><AssignmentIcon /></Button>} title={'Title'} right={ <Button color="primary">Login</Button>}/>
  
	);
});

stories.add('AppBar without right prop', () => {
	return (
    <AppBar color="accent" left={<Button fab={true} style={AppBarStoriesStyle}><AssignmentIcon /></Button>} title={'Title'} />
	);
});

stories.add('AppBar without  left prop', () => {
	return (
    <AppBar color="accent"   title={'Title'} right={ <Button color="primary">Login</Button>}/>
 
	);
});
stories.add('AppBar without title', () => {
	return (
    <AppBar color="accent" left={<Button fab={true} style={AppBarStoriesStyle}><AssignmentIcon /></Button>} right={ <Button color="primary">Login</Button>}/>
	);
});
