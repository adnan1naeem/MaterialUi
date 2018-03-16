import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import  ModalHeader from '../ModalHeader.Component';

const stories = storiesOf('ModalComponent', module);

  stories.add('ModalHeader', () => {
		return(
			<ModalHeader>
          UserLocation Service
      </ModalHeader>

		);
	});




