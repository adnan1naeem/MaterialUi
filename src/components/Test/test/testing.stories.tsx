/**
 * Created by waheed on 12/27/17.
 */


import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { storiesOf } from '@storybook/react';
import Test from '../component/Test';

const stories = storiesOf('testing', module);

stories.add('test', () => (
    <Test />
));