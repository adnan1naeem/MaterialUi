import * as React from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';
import {
  List,
  ListSubheader,
  ListItem
} from '../../List';

import { storiesOf } from '@storybook/react';

storiesOf('List', module).add('List with style and raised props', () => (
  <List
    style={{ width: '100%', height: 300 }}
    className="bg-main"
  >
    Raised
  </List>));

storiesOf('List', module).add('List of MUI-1', () => (
  <Paper>
    <List>
    <ListItem
			active={true}
			avatar={<ListItemIcon><InboxIcon/></ListItemIcon>}
			primary="Inbox"
		/>
      <ListItem
			active={true}
			avatar={<ListItemIcon><DraftsIcon/></ListItemIcon>}
			primary="Drafts"
		/>
    </List>
    <Divider />
      <ListItem
			active={true}
      primary="Trash"
      inset={true}
		/>
    <ListItem
			active={true}
      primary="Spam"
      inset={true}
		/>
  </Paper>));

storiesOf('List', module).add('List of MUI-2', () => (
  <Paper>
    <List>
    <ListItem
			active={true}
			avatar={<ListItemIcon><DraftsIcon/></ListItemIcon>}
			primary="Photos"
			secondary="Sep 7 ,2018"
		/>
    <ListItem
      active={true}
      disabled={true}
			avatar={<ListItemIcon><DraftsIcon/></ListItemIcon>}
			primary="Work"
			secondary="Sep 7 ,2018"
		/>
    </List>
  </Paper>));


storiesOf('List', module).add('List of MUI-4', () => (
  <Paper>
    <List dense={true} subheader={<ListSubheader>Heading1</ListSubheader>}>
    <ListItem
      active={true}
			avatar={<ListItemIcon><DraftsIcon/></ListItemIcon>}
      primary="single-line item"
      secondary="Secondary text"
		  action={<DraftsIcon/>}		/>
    </List>
  </Paper>));
