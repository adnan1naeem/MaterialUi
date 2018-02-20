import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { ListItemIcon } from '../../List';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import FolderIcon from 'material-ui-icons/Folder';

storiesOf('ListItemIcon', module).add('ListItemIcon with Icon as child', () =>
<ListItemIcon><FolderIcon/></ListItemIcon>);