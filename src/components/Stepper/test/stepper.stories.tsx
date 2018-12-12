import * as React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Stepper } from '../Stepper.components';
import { storiesOf } from '@storybook/react';


const stories = storiesOf('Stepper', module);
const backButton =	<Button><KeyboardArrowLeft />Back</Button>;
const NextButton=<Button >Next <KeyboardArrowRight/></Button>;

  stories.add('Stepper progresss', () => {

		return(
      <Stepper position="static" variant="progress" activeStep={3} backButton={backButton} nextButton={NextButton} steps={6}   />

		);
	});
  stories.add('Stepper dot', () => {

		return(
      <Stepper position="bottom" variant="dots" activeStep={3} backButton={backButton} nextButton={NextButton} steps={6}   />
		);
	});
  stories.add('Stepper  text', () => {

		return(
      <Stepper position="top" variant="text" activeStep={3} backButton={backButton} nextButton={NextButton} steps={6}   />

		);
	});
