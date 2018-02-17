/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { CardBodyProp } from '@blueeast/bluerain-ui-interfaces';
import  { CardContent } from 'material-ui/Card';

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

export interface MUIProps {
	classes?: {},
}

const BlueRainCardBody = (props: CardBodyProp & MUIProps) => {
	return (
        <CardContent
            {...props}
        >
        {props.children}
        </CardContent>
	);

};

export default BlueRainCardBody;