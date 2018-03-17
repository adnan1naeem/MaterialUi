import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ModalBody from '../ModalBody.Component';
const stories = storiesOf('Modal', module);

stories.add('ModalBody', () => {
	return(
		<ModalBody>
				 Let Google help apps determine location. This means sending anonymous location data to
						 Google, even when no apps are running.
		</ModalBody>

	);
});
