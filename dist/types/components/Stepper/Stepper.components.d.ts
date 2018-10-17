import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
export interface StepperProps extends StepperProperties {
    type: any;
    backButton: any;
    nextButton: any;
    position: 'top' | 'bottom';
}
export declare const Stepper: React.StatelessComponent<any>;
