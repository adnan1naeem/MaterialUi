import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import DialogComponent from '../Dialog Story';
import  DialogHeader from '../DialogHeader.Component';
const stories = storiesOf('DialogComponent', module);

stories.add('DialogComponent full width ', () => {
	return <DialogComponent fullWidth={true}  />;
});

stories.add('DialogComponent fulll screen ', () => {
	return <DialogComponent  fullScreen={true} />;
});


