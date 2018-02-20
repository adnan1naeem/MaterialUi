import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { CardFooter } from '../../Card';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Button from 'material-ui/Button';

const styles = {
	bg: {
		backgroundColor:'white', width:'100%'
	}
};

storiesOf('CardFooter', module).add('CardFooter with className and style prop', () =>
(
<CardFooter
		className="bg-footer"
		style={{ width:200, height:200, backgroundColor:'grey' }}
/>));

storiesOf('CardFooter', module).add('CardFooter with children prop (MUI specific)', () =>
(
<CardFooter disableActionSpacing style={styles.bg}>
	<Button dense>Learn More</Button>
</CardFooter>));
