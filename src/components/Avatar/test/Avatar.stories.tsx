import * as React from 'react';
import { number,  text, withKnobs } from '@storybook/addon-knobs';
import { Avatar } from '../../Avatar';
import { storiesOf } from '@storybook/react';
import AssignmentIcon from 'material-ui-icons/Assignment';
import FolderIcon from 'material-ui-icons/Folder';
import PageviewIcon from 'material-ui-icons/Pageview';
import BR from '@blueeast/bluerain-os';

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs).add('Avatar (with knobs)', () => {
	const content = text('content', 'Remy Sharp');
	const colour = text('color', 'green');
	const size = number('size', 400);
	return <Avatar alt={content} src="https://material-ui-next.com/stati
c/images/remy.jpg" size={size} style={{ backgroundColor:colour }}/>;
}).add('Avatar (withOut knobs)', () => {
	return  (
    <Avatar
        alt="Adelle Charles"
        src="https://material-ui-next.com/static/images/uxceo-128.jpg"
        style={{ height:70, width:70 }}
    />);
}).add('Avatar (with Icons)', () => {
	return  (
<div style={{ display:'flex', }}>
    <Avatar style={{ backgroundColor:'pink' }}>
    <FolderIcon />
    </Avatar>
    <Avatar style={{ backgroundColor:'grey' }}>
    <PageviewIcon />
    </Avatar>
    <Avatar style={{ backgroundColor:'green' }}>
    <AssignmentIcon />
    </Avatar>
</div>);
}).add('Avatar with text', () => {
	return  (
<div style={{ display:'flex', }}>
    <Avatar style={{ backgroundColor:'grey' }}>
     <BR.Components.Text> H</BR.Components.Text>
    </Avatar>
    <Avatar style={{ backgroundColor:'orange' }}>
    <BR.Components.Text>N</BR.Components.Text>
    </Avatar>
    <Avatar style={{ backgroundColor:'purple' }}>
    <BR.Components.Text>OP</BR.Components.Text>
    </Avatar>
</div>);
});
