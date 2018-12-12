import MobileStepper from '@material-ui/core/MobileStepper';
import React from 'react';
import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';

export interface StepperProps extends StepperProperties {
  variant: 'text' | 'dots' | 'progress',
  backButton: any;
  nextButton: any;
  position: 'bottom' | 'top' | 'static'
}
export const Stepper: React.StatelessComponent<StepperProps> = (props) => {

  return (
    <MobileStepper   {...props} />
  );
};






