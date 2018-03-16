import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import ModalBody from '../ModalBody.Component';
const stories = storiesOf('ModalComponent', module);

stories.add('ModalBody', () => {
	return(
		<ModalBody>
				 Let Google help apps determine location. This means sending anonymous location data to
						 Google, even when no apps are running.
		</ModalBody>

	);
});




