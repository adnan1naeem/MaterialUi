/// <reference types="react" />
import { SliderProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
/**
 * The universal props of Slider Component for MuiTheme
 * @param {number} props.defautValue value of the slider.
 * @param {number} props.maxValue maxValue of the slider.
 * @param {number} props.minValue minValue of the slider.
 * @param {function} props.onValueChange Invoked when the value changes.
 */
export interface MUIProps extends SliderProperties {
    bluerain?: any;
}
declare const _default: React.ComponentType<any>;
export default _default;
