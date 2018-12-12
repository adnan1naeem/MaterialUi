import * as React from 'react';
import { FormControlProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The props of FormControl Component
 * @param {Node} props.children Children of FormControl component.
 * @param {Object} props.style style object for FormControl's style.
 * @param {Object} props.component component to generate FormControl component with.
 * @param {Object} props.className className for FormControl's extended style.
 */
export interface MUIFormControlProperties extends FormControlProperties {
    classes?: {};
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    margin?: 'none' | 'dense' | 'normal';
    required?: boolean;
    component?: string | object | any;
}
declare const BlueRainFormControl: React.StatelessComponent<MUIFormControlProperties>;
export default BlueRainFormControl;
