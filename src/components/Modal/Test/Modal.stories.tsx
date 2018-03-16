import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import ModalStoryComponent from '../ModalStory';
const stories = storiesOf('ModalComponent', module);

stories.add('ModalComponent full width ', () => {
	return <ModalStoryComponent fullWidth={true}  />;
});

stories.add('ModalComponent fulll screen ', () => {
	return <ModalStoryComponent  fullScreen={true} />;
});


