import React from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';

export interface WebStepperProps extends StepperProperties {
  variant?: 'text' | 'dots' | 'progress',
  backButton?: any;
  nextButton?: any;
  position?: 'bottom' | 'top' | 'static';
  children?: React.ReactNode;
  steps: any;
}
export const WebStepper: React.StatelessComponent<WebStepperProps> = (props) => {
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






