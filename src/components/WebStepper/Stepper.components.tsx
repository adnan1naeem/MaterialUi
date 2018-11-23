import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import React from 'react';

export interface StepperProps extends StepperProperties {
  variant?: 'text' | 'dots' | 'progress',
  backButton?: any;
  nextButton?: any;
  position?: 'bottom' | 'top' | 'static';
  children?: React.ReactNode;
  steps: any;
}
export const WebStepper: React.StatelessComponent<StepperProps> = (props) => {

  return (
    <Stepper {...props} >
      {
        props.steps.map((label: any) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
    </Stepper>
  );
};






