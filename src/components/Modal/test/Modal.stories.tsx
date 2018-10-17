import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ModalStoryComponent from './ModalStory';
const stories = storiesOf('Modal', module);

stories.add('ModalComponent full width ', () => {
  return <ModalStoryComponent fullWidth={true} />;
});

stories.add('ModalComponent fulll screen ', () => {
  return <ModalStoryComponent fullScreen={true} />;
});

stories.add('ModalComponent maxWidth="xs"', () => {
  return <ModalStoryComponent maxWidth="xs" />;
});


stories.add('ModalComponent maxWidth="sm"', () => {
  return <ModalStoryComponent maxWidth="sm" />;
});

stories.add('ModalComponent maxWidth="md"', () => {
  return <ModalStoryComponent maxWidth="md" />;
});

stories.add('ModalComponent PaperProps={Blob}', () => {
  return <ModalStoryComponent PaperProps={Blob} />;
});

stories.add('ModalComponent with  scroll="body" ', () => {
  return <ModalStoryComponent scroll="body" />;
});


stories.add('ModalComponent with  scroll="paper" ', () => {
  return <ModalStoryComponent scroll="paper" />;
});
