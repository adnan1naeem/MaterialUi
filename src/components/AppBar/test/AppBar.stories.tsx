import * as React from 'react';
import { number,  text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import AppBar from '../../AppBar';
import AssignmentIcon from 'material-ui-icons/Assignment';
import Button from '../../Button';
import FolderIcon from 'material-ui-icons/Folder';
import PageviewIcon from 'material-ui-icons/Pageview';

const stories = storiesOf('AppBar', module);

stories.add('AppBar with primary color and position="fixed"', () => {
	return  (
    <AppBar position="fixed" color="primary">
          <Button style={{ backgroundColor:'transparent', boxShadow:'none', border:0 }}>
            <AssignmentIcon />
          </Button>
          <h3 style={{ display:'flex', flex: 1 }}>
            Title
            </h3>
          <Button color="primary">Login</Button>
      </AppBar>);
});

stories.add('AppBar with position static and default color', () => {
	return  (
        <AppBar position="static" color="default">
          <Button style={{ backgroundColor:'transparent', boxShadow:'none', border:0 }}>
            <AssignmentIcon />
          </Button>
          <h3 style={{ display:'flex', flex: 1 }}>
            Title
            </h3>
          <Button color="default">Login</Button>
      </AppBar>);
});

stories.add('AppBar with secondary color and  position="absolute"', () => {
	return  (
<AppBar position="absolute" color="secondary">
          <Button style={{ backgroundColor:'transparent', boxShadow:'none', border:0 }}>
            <AssignmentIcon />
          </Button>
          <h3 style={{ display:'flex', flex: 1 }}>
            Title
            </h3>
          <Button color="secondary">Login</Button>
      </AppBar>);
});

stories.add('AppBar with accent color', () => {
	return  (
<AppBar color="accent">
          <Button style={{ backgroundColor:'transparent', boxShadow:'none', border:0 }}>
            <AssignmentIcon />
          </Button>
          <h3 style={{ display:'flex', flex: 1 }}>
            Title
            </h3>
          <Button color="accent">Login</Button>
      </AppBar>);
});