/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { CardActions } from 'material-ui/Card';
import { ICardFooter } from '@blueeast/bluerain-ui-interfaces/Components/Card';

/**
 * The props of CardFooter Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.children tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */

/**
 * Platform specific props
 * @param {boolean} props.disableActionSpacing If true, the card actions do not have additional margin.
 * @param {Object} props.classes Useful to extend style for the component.
 */

export interface IMUIProps {
	classes?: {},
	disableActionSpacing?: boolean,
}

const BlueRainCardFooter = (props: ICardFooter & IMUIProps) => {
	return (
        <CardActions
            {...props}
        >
        {props.children}
        </CardActions>
	);

};

export default BlueRainCardFooter;