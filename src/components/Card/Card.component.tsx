/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import React, { SFC } from 'react';
// import * as React from 'react';
import { CardProp } from '@blueeast/bluerain-ui-interfaces';
import Card from 'material-ui/Card';

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

export interface MUIProps extends CardProp {
	elevation?: number,
	square?: boolean,
}

class BlueRainCard extends React.Component<MUIProps, {}> {
	render() {
		return (
        <Card
            {...this.props}
            raised={this.props.raised}
            style={this.props.style}
            component={typeof this.props.tag === 'string' ? this.props.tag : 'div'}
            className={this.props.className}
        >
        {this.props.children}
        </Card>
		);
	}
}

// const BlueRainCard: SFC<MUIProps> = (props) => {
// 	return (
//         <Card
//             {...props}
//             raised={props.raised}
//             style={props.style}
//             component={typeof props.tag === 'string' ? props.tag : 'div'}
//             className={props.className}
//         >
//         {props.children}
//         </Card>
// 	);
// };

export default BlueRainCard;
