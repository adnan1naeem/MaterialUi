import * as React from 'react';
import { Button, Input } from 'material-ui';
import { ListItem } from '../../List';
import { storiesOf } from '@storybook/react';
import { Drafts } from 'material-ui-icons';
import BR from '@blueeast/bluerain-os';
import { action } from '@storybook/addon-actions';



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
			action={<Button style={{ backgroundColor: 'blue', color: 'white' }}>Add</Button>}
		/>
	)
).add('ListItem with children prop',
	() => (
		<ListItem
			active={true}
			onPress={action('listitem is clicked')}
			style={{ backgroundColor: '#D3D3D3' }}
			avatar="https://facebook.github.io/react-native/img/header_logo.png"
			action={<Button style={{ backgroundColor: 'blue', color: 'white' }}>Add</Button>}
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
			action={<Button style={{ backgroundColor: 'blue', color: 'white' }}>Add</Button>}
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
		/>
	)
).add('ListItem for inputfrom  component',
	() => (
		<ListItem
			active={false}
			onPress={action('listitem is clicked')}
			style={{ backgroundColor: '#D3D3D3' }}
			avatar={<Drafts />}
			primary="Please Enter Name"
			secondary={<Input fullWidth={true} />}
		/>
	)
);