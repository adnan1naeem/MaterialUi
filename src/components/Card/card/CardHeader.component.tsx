import { CardHeader } from 'material-ui/Card';
import { ICardHeader } from 'bluerain-ui-interfaces/Components/Card';
import React from 'react';

/**
 * The props of CardHeader Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.children Children of the CardHeader.
 * @param {Node} props.title Title of the CardHeader.
 * @param {string} props.className className for styling component with css.
 */


 /**
  * Platform specific props
  * @param {Node} props.action The action to display in the card header.
  * @param {Node} props.avatar The Avatar for the Card Header.
  * @param {Object} props.classes Useful to extend the style applied to components.
  * @param {Node} props.subheader The content of the component. Subheader overrides children
  */

export interface IMUIProps {
	action?: React.ReactNode,
	avatar?: React.ReactNode,
	classes?: {},
	subheader?: React.ReactNode,
}

const BlueRainCardHeader = (props: ICardHeader & IMUIProps) => {
	return (
        <CardHeader
            style={props.style}
            title={props.title}
            subheader={props.subheader? props.subheader : props.children}
            {...props}
        />
	);

};

export default BlueRainCardHeader;