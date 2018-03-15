import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import DialogComponent from '../Dialog Story';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import  DialogFooter from '../DialogFooter.Component';
import { Button } from '../../Button';

const stories = storiesOf('DialogComponent', module);

stories.add('DialogFooter', () => {
  const Handler =() => {
	alert('clicked');
	};
	return(
   	<DialogFooter>
				<Button onPress={Handler} color="primary" >
					Agree
				</Button>
				<Button onPress={Handler} color="primary">
					Disagree
				</Button>
		</DialogFooter>

	);

});



