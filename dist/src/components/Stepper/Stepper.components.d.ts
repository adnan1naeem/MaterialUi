/// <reference types="react" />
import React from 'react';
import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';
export interface StepperProps extends StepperProperties {
    variant: 'text' | 'dots' | 'progress';
    backButton: any;
    nextButton: any;
    position: 'bottom' | 'top' | 'static';
}
export declare const Stepper: React.StatelessComponent<StepperProps>;
