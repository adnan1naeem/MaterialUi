import * as React from 'react';
import {CardHeader} from '../../Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

const Text = BR.Components.get('Text');

const label = text('label as child', <Text>With knobs</Text>);
storiesOf('CardHeader', module).add('CardHeader with title as Node and style props', () =>
(
<CardHeader
    style={{width:300, backgroundColor:'white'}}
    title={label}
/>));

storiesOf('CardHeader', module).add('CardHeader with title prop as string', () =>
(
<CardHeader
    title="Title"
/>));

storiesOf('CardHeader', module).add('CardHeader with children and title prop ', () =>
(
<CardHeader title="Children">
    <Avatar aria-label="Recipe" style={{backgroundColor:'red'}}>R</Avatar>
    <IconButton><SkipNextIcon /></IconButton>
    "Shrimp and Chorizo Paella"
    "September 14, 2016"
</CardHeader>));

storiesOf('CardHeader', module).add('CardHeader with MUI props', () =>
(
<CardHeader
    avatar={<Avatar aria-label="Recipe" style={{backgroundColor:'red'}}>R</Avatar>}
    action={<IconButton><SkipNextIcon /></IconButton>}
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
/>));
