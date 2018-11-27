import * as React from 'react';
import { ListItem } from '../../List';
import { storiesOf } from '@storybook/react';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import BR from '@blueeast/bluerain-os';
import { action } from '@storybook/addon-actions';
import  Switch  from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';



storiesOf('ListItem', module).add(
	'ListItem with  style,active , primary , secondary ,action , avatar and onPress props',
	() => (
		<ListItem
			active={true}
			onPress={action('cllicked')}
			avatar="https://facebook.github.io/react-native/img/header_logo.png"
			primary="Muhammad Aqeel khan"
			style={{ backgroundColor: '#D3D3D3' }}
			secondary="Reat Js Developer"
			action={<BR.Components.View style={{ flex: '0 0 auto' }}><BR.Components.Text>Hello</BR.Components.Text></BR.Components.View>}
		/>
	)
).add('ListItem with children prop',
	() => (
		<ListItem
			active={true}
			onPress={action('listitem is clicked')}
			style={{ backgroundColor: '#D3D3D3' }}
			avatar="https://facebook.github.io/react-native/img/header_logo.png"
			action={<Switch value={true} />}
		>
			Muhamma Aqeel
    </ListItem>
	)
).add('ListItem without avatar prop',
	() => (
		<ListItem
			active={true}
			onPress={action('listitem is clicked')}
			style={{ backgroundColor: '#D3D3D3' }}
			primary="Aqeel khan"
			secondary="Reat Js Developer"
			action={<Switch value={true} />}
		/>
	)
).add('ListItem without action prop',
	() => (
		<ListItem
			active={false}
			button={true}
			// onPress={action('listitem is clicked')}
			style={{ backgroundColor: '#D3D3D3' }}
			avatar="https://facebook.github.io/react-native/img/header_logo.png"
			primary="Aqeel khan"
			secondary="Reat Js Developer"
			action={<Button style={{ backgroundColor: 'red' }}>Add</Button>}
		/>
	)
).add('ListItem for inputfrom  component',
	() => (
		<ListItem
			active={false}
			onPress={action('listitem is clicked')}
			style={{ backgroundColor: '#D3D3D3' }}
			avatar={<FolderIcon />}
			primary="Please Enter Name"
			secondary={<Input fullWidth={true} />}
		/>
	)
);