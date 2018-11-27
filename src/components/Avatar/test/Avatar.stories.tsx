import * as React from 'react';
import { number,  text, withKnobs } from '@storybook/addon-knobs';
import { Avatar } from '../../Avatar';
import { storiesOf } from '@storybook/react';
import MenuIcon from '@material-ui/icons/Menu';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import BR from '@blueeast/bluerain-os';

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs).add('Avatar (with knobs)', () => {
	const content = text('content', 'Remy Sharp');
	const colour = text('color', 'green');
	const size = number('size', 400);
	return <Avatar alt={content} src="https://material-ui-next.com/static/images/uxceo-128.jpg" size={size} style={{ backgroundColor:colour }}/>;
}).add('Avatar (withOut knobs)', () => {
	return  (
    <Avatar
        alt="Adelle Charles"
        src="https://material-ui-next.com/static/images/uxceo-128.jpg"
        style={{ height:70, width:70 }}
    />);
}).add('Avatar with size', () => {
	return  (
    <Avatar
        alt="Adelle Charles"
        src="https://material-ui-next.com/static/images/uxceo-128.jpg"
        style={{ height:70, width:70 }}
        size={70}
    />);
}).add('Avatar (with Icons)', () => {
	return  (
<div style={{ display:'flex', }}>
    <Avatar style={{ backgroundColor:'pink' }} size={40}>
    <FolderIcon />
    </Avatar>
    <Avatar style={{ backgroundColor:'grey' }} size={40}>
    <PageviewIcon />
    </Avatar>
    <Avatar style={{ backgroundColor:'green' }} size={40}>
    <MenuIcon />
    </Avatar>
</div>);
}).add('Avatar with text', () => {
	return  (
<div style={{ display:'flex', }}>
    <Avatar style={{ backgroundColor:'grey'}} >
     <BR.Components.Text> H</BR.Components.Text>
    </Avatar>
    <Avatar style={{ backgroundColor:'orange' }} size={60}>
    <BR.Components.Text>N</BR.Components.Text>
    </Avatar>
    <Avatar style={{ backgroundColor:'purple' }} size={50}>
    <BR.Components.Text>OP</BR.Components.Text>
    </Avatar>
</div>);
});
