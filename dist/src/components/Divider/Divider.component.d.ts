/// <reference types="react" />
import * as React from 'react';
import { DividerProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The universal props of Divider Component
 * @param {ReactNode} props.light If true, Divider is generated with light color.
 *  The specific libraray props of Divider Component
 * @param {ReactNode} props.component component to generate Divider with.
 * @param {ReactNode} props.inset if true, Divider is generated indented.
 */
export interface MUIDividerProperties extends DividerProperties {
    inset?: boolean;
    absolute?: boolean;
    classes?: {};
    light?: boolean;
}
declare const BlueRainDivider: React.StatelessComponent<MUIDividerProperties>;
export default BlueRainDivider;
