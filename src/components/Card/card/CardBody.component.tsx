import  { CardContent } from 'material-ui/Card';
import { ICardBody } from 'bluerain-ui-interfaces/Components/Card';
import React from 'react';

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

export interface IMUIProps {
	classes?: {},
}

const BlueRainCardBody = (props: ICardBody & IMUIProps) => {
	return (
        <CardContent
            {...props}
        >
        {props.children}
        </CardContent>
	);

};

export default BlueRainCardBody;