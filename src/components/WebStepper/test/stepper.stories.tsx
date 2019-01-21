import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { WebStepper } from '../WebStepper.components';


const stories = storiesOf('WebStepper', module);
function getSteps() {
	return ['Select Device', 'Wifi Hotsopt', 'Wifi Network', 'Connect Device', 'Add Your Device'];
}
const steps = getSteps();
stories.add('Stepper progresss', () => {
	return (
		<WebStepper variant="progress" activeStep={1} alternativeLabel steps={steps}>

		</WebStepper>

	);
});
stories.add('Stepper dot', () => {

	return (
		<WebStepper variant="progress" activeStep={2} alternativeLabel steps={steps}>

		</WebStepper>);
});
stories.add('Stepper  text', () => {

	return (
		<WebStepper variant="progress" activeStep={3} alternativeLabel steps={steps}>

		</WebStepper>
	);
});
