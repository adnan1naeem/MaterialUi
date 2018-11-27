import * as React from 'react';
import  { Stepper } from '../Stepper.components';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const stories = storiesOf('Stepper', module);
const backButton =	<Button><KeyboardArrowLeft />Back</Button>;
const NextButton=<Button >Next <KeyboardArrowRight/></Button>;

  stories.add('Stepper progresss', () => {

		return(
      <Stepper  variant="progress" activeStep={3} backButton={backButton} nextButton={NextButton} steps={6}   />

		);
	});
  stories.add('Stepper dot', () => {

		return(
      <Stepper variant="dots" activestep={3} backButton={backButton} nextButton={NextButton} steps={6}   />
		);
	});
  stories.add('Stepper  text', () => {

		return(
      <Stepper position="top" variant="text" activestep={3} backButton={backButton} nextButton={NextButton} steps={6}   />

		);
	});
