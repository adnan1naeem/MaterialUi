import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { Button } from '../../Button';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import  ModalFooter from '../ModalFooter.Component';

const stories = storiesOf('ModalComponent', module);

stories.add('ModalFooter', () => {
  const Handler =() => {
	alert('clicked');
	};
	return(
   	<ModalFooter>
				<Button onPress={Handler} color="primary" >
					Agree
				</Button>
				<Button onPress={Handler} color="primary">
					Disagree
				</Button>
		</ModalFooter>

	);

});



