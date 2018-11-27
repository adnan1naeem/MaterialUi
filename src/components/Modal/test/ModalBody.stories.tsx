import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ModalBody from '../ModalBody.Component';
const stories = storiesOf('ModalBody', module);

stories.add('ModalBody', () => {
  return (
    <ModalBody>
      Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
		</ModalBody>

  );
});



stories.add('ModalBody taking text as a children prop', () => {
  return (
    <ModalBody>
      Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
		</ModalBody>

  );
});



stories.add('ModalBody  styling', () => {
  return (
    <ModalBody style={{ color: 'red' }}>
      Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
		</ModalBody>

  );
});
