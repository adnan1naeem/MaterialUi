import * as React from 'react';
import { storiesOf } from '@storybook/react';
import  ModalHeader from '../ModalHeader.Component';

const stories = storiesOf('Modal', module);

  stories.add('ModalHeader', () => {
		return(
			<ModalHeader>
          UserLocation Service
      </ModalHeader>

		);
	});