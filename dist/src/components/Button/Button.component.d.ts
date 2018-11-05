/// <reference types="react" />
import * as React from 'react';
import { ButtonProperties } from '@blueeast/bluerain-ui-interfaces';
export interface MuiButtonProperties extends ButtonProperties {
    size?: 'small' | 'medium' | 'large';
    color?: any;
}
export declare const BlueRainButton: React.StatelessComponent<MuiButtonProperties>;
