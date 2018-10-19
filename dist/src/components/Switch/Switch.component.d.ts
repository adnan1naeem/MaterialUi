/// <reference types="react" />
import * as React from 'react';
import { SwitchProperties } from '@blueeast/bluerain-ui-interfaces';
export interface MUISwitchProperties extends SwitchProperties {
    mvalue?: string | number | boolean;
    classes?: object;
    disableRipple?: boolean;
    icon?: React.ReactNode;
    checkedIcon?: React.ReactNode;
    inputProps?: object;
    inputRef?: () => void | object;
    type?: string;
    color?: 'primary' | 'secondary' | 'default';
}
declare const BlueRainSwitch: React.StatelessComponent<MUISwitchProperties>;
export default BlueRainSwitch;
