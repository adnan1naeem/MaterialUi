import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
export interface StepperProps extends StepperProperties {
    variant: 'text' | 'dots' | 'progress';
    backButton: any;
    nextButton: any;
    position: 'bottom' | 'top' | 'static';
}
export declare const Stepper: React.StatelessComponent<any>;
