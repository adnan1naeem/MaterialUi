import { StepperProperties }  from  '@blueeast/bluerain-ui-interfaces';
import MobileStepper from '@material-ui/core/MobileStepper';
import React from 'react';

export interface StepperProps  extends StepperProperties {
  variant:'text' |'dots' |'progress',
  backButton:any;
  nextButton:any;
  position:'bottom' |'top' | 'static'
}
export const Stepper : React.StatelessComponent<any> = (props:StepperProps) => {

  return (
        <MobileStepper   {...props} />
	);
};






