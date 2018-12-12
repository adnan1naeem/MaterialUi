/// <reference types="react" />
import React from 'react';
import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';
export interface WebStepperProps extends StepperProperties {
    variant?: 'text' | 'dots' | 'progress';
    backButton?: any;
    nextButton?: any;
    position?: 'bottom' | 'top' | 'static';
    children?: React.ReactNode;
    steps: any;
}
export declare const WebStepper: React.StatelessComponent<WebStepperProps>;
