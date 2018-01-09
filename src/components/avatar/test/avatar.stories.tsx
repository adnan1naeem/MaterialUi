import * as React from 'react';
import Avatar from '../../avatar';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FolderIcon from 'material-ui-icons/Folder';
import PageviewIcon from 'material-ui-icons/Pageview';
import AssignmentIcon from 'material-ui-icons/Assignment';
import { withKnobs, text, number} from '@storybook/addon-knobs';
const stories = storiesOf('Avatar', module);
stories.add('Avatar (with knobs)', () => {
    const content = text('content', 'Remy Sharp');
    const colour = text('color', 'green');
    const size = number('size', 400);
    return <Avatar alt={content} src="https://material-ui-next.com/static/images/remy.jpg" size={size} style={{backgroundColor:colour}}/>;
});
stories.add('Avatar (withOut knobs)', () => {
    return  (
    <Avatar
        alt="Adelle Charles"
        src="https://material-ui-next.com/static/images/uxceo-128.jpg"
        style={{height:70, width:70}}
    />);
});

stories.add('Avatar (with Icons)', () => {
    return  (
<div style={{display:'flex',}}>
    <Avatar style={{backgroundColor:'pink'}}>
    <FolderIcon />
    </Avatar>
    <Avatar style={{backgroundColor:'grey'}}>
    <PageviewIcon />
    </Avatar>
    <Avatar style={{backgroundColor:'green'}}>
    <AssignmentIcon />
    </Avatar>
</div>);
});

stories.add('Avatar with text', () => {
    return  (
<div style={{display:'flex',}}>
    <Avatar style={{backgroundColor:'grey'}}>
    H
    </Avatar>
    <Avatar style={{backgroundColor:'orange'}}>
    N
    </Avatar>
    <Avatar style={{backgroundColor:'purple'}}>
    OP
    </Avatar>
</div>);
});