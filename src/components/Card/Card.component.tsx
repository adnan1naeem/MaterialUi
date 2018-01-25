/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import Card from 'material-ui/Card';
import ICard from 'bluerain-ui-interfaces/Components/Card';

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

export interface IMUIProps {
	elevation?: number,
	square?: boolean,
}

const BlueRainCard = (props: ICard & IMUIProps) => {
	return (
        <Card
            {...props}
            raised={props.raised}
            style={props.style}
            component={typeof props.tag === 'string' ? props.tag : 'div'}
            className={props.className}
        >
        {props.children}
        </Card>
	);

};

export default BlueRainCard;