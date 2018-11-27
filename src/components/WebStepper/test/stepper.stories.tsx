import * as React from 'react';
import { WebStepper } from '../Stepper.components';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const stories = storiesOf('WebStepper', module);
const backButton = <Button><KeyboardArrowLeft />Back</Button>;
const NextButton = <Button >Next <KeyboardArrowRight /></Button>;
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
