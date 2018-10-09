import * as React from 'react';
import  { Stepper } from '../Stepper.components';
import { storiesOf } from '@storybook/react';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const stories = storiesOf('Stepper', module);
const backButton =	<Button><KeyboardArrowLeft />Back</Button>;
const NextButton=<Button >Next <KeyboardArrowRight/></Button>;

  stories.add('Stepper progresss', () => {

		return(
      <Stepper  type="progress" activeStep={3} backButton={backButton} nextButton={NextButton} steps={6}   />

		);
	});
  stories.add('Stepper dot', () => {

		return(
      <Stepper type="dots" activestep={3} backButton={backButton} nextButton={NextButton} steps={6}   />
		);
	});
  stories.add('Stepper  text', () => {

		return(
      <Stepper position="top" type="text" activestep={3} backButton={backButton} nextButton={NextButton} steps={6}   />

		);
	});


	// activeStep?: number;
  // backButton: React.ReactElement<any>;
  // nextButton: React.ReactElement<any>;
  // position?: 'bottom' | 'top' | 'static';
  // steps: number;
  // type?: 'text' | 'dots' | 'progress';