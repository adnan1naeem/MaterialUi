import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { ListItem } from '../../List';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';

const okay = () => {
	console.log('helo');
};
storiesOf('ListItem', module).add('ListItem with tag, href and action props', () =>
<ListItem active onPress={okay}>Cras justo odio</ListItem>);
