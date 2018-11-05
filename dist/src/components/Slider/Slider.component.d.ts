/// <reference types="react" />
import * as React from 'react';
import { SliderProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The universal props of Divider Component
 * @param {ReactNode} props.light If true, Divider is generated with light color.
 *  The specific libraray props of Divider Component
 * @param {ReactNode} props.component component to generate Divider with.
 * @param {ReactNode} props.inset if true, Divider is generated indented.
 */
export interface MUISliderProperties extends SliderProperties {
    classes?: object;
    max?: number;
    min?: number;
    onChange?: (event: any, value: any) => void;
    onDragEnd?: () => void;
    onDragStart?: () => void;
    step?: number;
    thumb?: Node;
    value?: number;
    vertical?: boolean;
    defaultValue?: any;
}
declare const BlueRainSlider: React.StatelessComponent<MUISliderProperties>;
export default BlueRainSlider;
