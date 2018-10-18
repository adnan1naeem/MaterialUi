import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ModalBodyText from '../ModalBodyText.component';
const stories = storiesOf('ModalBodyText', module);

stories.add('ModalBodyText', () => {
  return (
    <ModalBodyText>
      Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
    </ModalBodyText>

  );
});

stories.add('ModalBody taking text as a children prop', () => {
  return (
    <ModalBodyText>
      Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
		</ModalBodyText>

  );
});

stories.add('ModalBody  styling', () => {
  return (
    <ModalBodyText classes={{ color: 'red' }}>
      Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
		</ModalBodyText>

  );
});
