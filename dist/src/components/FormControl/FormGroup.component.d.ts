/// <reference types="react" />
import * as React from 'react';
import { FormGroupProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The props of ListHeader Component
 * @param {Node} props.children Children of FormGroup.
 * @param {Object} props.row If true, children are shown in a compact row.
 * @param {Object} props.style style object for FormGroup's style.
 * @param {Object} props.className className for FormGroup's extended style.
 */
export interface MUIFormGroupProperties extends FormGroupProperties {
    classes?: {};
}
declare const BlueRainFormGroup: React.StatelessComponent<MUIFormGroupProperties>;
export default BlueRainFormGroup;
