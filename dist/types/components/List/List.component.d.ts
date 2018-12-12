/// <reference types="react" />
import * as React from 'react';
import { ListProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The props of List Component
 * @param {Node} props.children Children of List component.
 * @param {Object} props.style style object for List's style.
 */
/**
 * Platform specific props
 * @param {string} props.className className to give css styling.
 * @param {Node} props.subheader subbheader of List.
 * @param {bool} props.disablePadding If true, padding is disabled.
 * @param {bool} props.dense if true, dense styling is used.
 */
export interface MUIListProperties extends ListProperties {
    className?: string;
    subheader?: any;
    disablePadding?: boolean;
    dense?: boolean;
}
declare const BlueRainList: React.StatelessComponent<MUIListProperties>;
export default BlueRainList;
