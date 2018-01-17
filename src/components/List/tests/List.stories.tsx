import * as React from 'react';
import List, { ListItem, ListItemText, ListItemAvatar, ListItemIcon, ListItemRightButton, ListHeader } from '../../List';
import Button from '../../button';
import Avatar from '../../avatar';
import BR from '@blueeast/bluerain-os';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const View = BR.Components.get('View');

storiesOf('List', module).add('List with style and raised props', () =>(
<List
    style={{width:'100%', height:300}}
    className="bg-main"
>
Raised
</List>));

storiesOf('List', module).add('List of MUI-1', () =>(
<Paper>
    <List>
        <ListItem button>
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItem>
    </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
</Paper>));

storiesOf('List', module).add('List of MUI-2', () =>(
<Paper>
<List>
<ListItem button>
  <Avatar size={40}>
  <DraftsIcon />
  </Avatar>
  <ListItemText primary="Photos" secondary="Jan 9, 2016" />
</ListItem>
<ListItem button>
  <Avatar>
    <DraftsIcon />
  </Avatar>
  <ListItemText primary="Work" secondary="Jan 7, 2016" />
</ListItem>
</List>
</Paper>));


storiesOf('List', module).add('List of MUI-4', () =>(
<Paper>
<List dense={true}>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <DraftsIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary="Single-line item"
      secondary="Secondary text"
    />
    <ListItemRightButton>
      <IconButton aria-label="Delete">
        <DraftsIcon />
      </IconButton>
    </ListItemRightButton>
  </ListItem>
</List>
</Paper>));
