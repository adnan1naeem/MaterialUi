/// <reference types="react" />
import * as React from 'react';
import { BlueRain } from '@blueeast/bluerain-os';
import { AvatarProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The universal props of Avatar Component
 * @param {Object} props.style Get the style object.
 * @param {string} props.src src for Avatar.
 * @param {Node} props.children children of Avatar.
 *  The specific libraray props of Badge Component
 * @param {string} props.alt The enum color of Badge.
 * @param {Object} props.classes the children on which the badge will append styles.
 * @param {string or function} props.component The enum color of Badge.
 * @param {Object} props.imgProps the children on which the badge will append styles.
 * @param {string} props.sizes The sizes of image.
 */
export interface MUIAvatarProperties extends AvatarProperties {
    alt?: string;
    children?: React.ReactNode;
    classes?: {};
    component?: any;
    imgProps?: {};
    sizes?: string;
    src?: string;
    style?: {};
    bluerain?: BlueRain;
}
declare const _default: React.ComponentType<any>;
export default _default;
