import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { Button } from '../../Button';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import DialogComponent from '../Dialog Story';
import  DialogFooter from '../DialogFooter.Component';

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



