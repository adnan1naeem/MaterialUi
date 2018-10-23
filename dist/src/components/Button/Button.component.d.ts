import * as React from 'react';
import { ButtonProperties } from '@blueeast/bluerain-ui-interfaces';
export interface MuiButtonProperties extends ButtonProperties {
    size?: 'small' | 'medium' | 'large';
}
export declare const BlueRainButton: React.StatelessComponent<MuiButtonProperties>;
