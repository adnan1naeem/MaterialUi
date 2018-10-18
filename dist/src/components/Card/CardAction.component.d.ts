import * as React from 'react';
import { CardBodyProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The props of CardBody Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.children tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */
/**
 * Platform specific props
 * @param {Object} props.classes Usefull to extend the style for CardBody component.
 */
export interface MUICardBodyProperties extends CardBodyProperties {
    classes?: {};
}
declare const BlueRainCardAction: React.StatelessComponent<MUICardBodyProperties>;
export default BlueRainCardAction;
