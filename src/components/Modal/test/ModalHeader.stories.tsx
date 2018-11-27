import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ModalHeader from '../ModalHeader.Component';

const stories = storiesOf('ModalHeader', module);

stories.add('ModalHeader taking text as children prop', () => {
  return (
    <ModalHeader>
      UserLocation Service
      </ModalHeader>

  );
});


stories.add('ModalHeader  disableTypography prop', () => {
  return (
    <ModalHeader disableTypography={true} >
      UserLocation Service
      </ModalHeader>

  );
});