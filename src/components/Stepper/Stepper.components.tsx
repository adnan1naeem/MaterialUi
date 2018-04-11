import { StepperProperties }  from  '@blueeast/bluerain-ui-interfaces';
import MobileStepper from 'material-ui/MobileStepper';
import React from 'react';

export interface StepperProps  extends StepperProperties {
  type:any;
  backButton:any;
  nextButton:any;
  position:'top'|'bottom'
}
export const Stepper : React.StatelessComponent<StepperProps> = (props) => {

  return (
        <MobileStepper  {...props} />
	);
};






