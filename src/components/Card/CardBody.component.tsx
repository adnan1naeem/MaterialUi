import * as React from 'react';
import { CardBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import CardContent from '@material-ui/core/CardContent';

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

const BlueRainCardBody: React.StatelessComponent<MUICardBodyProperties> = props => {
  return <CardContent {...props}>{props.children}</CardContent>;
};

export default BlueRainCardBody;
