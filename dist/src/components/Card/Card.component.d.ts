import { CardProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
/**
 * The props of Card Component
 * @param {Node} props.children Children to be passed for card component.
 * @param {Object} props.style style object for Card's style.
 * @param {boolean} props.raised If true, card is generated with raised styling.
 * @param {string or function} props.tag tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */
/**
 * Platform specific props
 * @param {number} props.elevation box-shadow of Card in range 0-24.
 * @param {boolean} props.square If true, rounded corners are degenerated.
 */
export interface MUICardProperties extends CardProperties {
    elevation?: number;
    square?: boolean;
}
declare const BlueRainCard: React.StatelessComponent<MUICardProperties>;
export default BlueRainCard;
