import * as React from 'react';
import { BadgeProp } from '@blueeast/bluerain-ui-interfaces';
import BadgeUi from 'material-ui/Badge';


/**
 * The universal props of Badge Component
 * @param {Object} props.style Get the style object.
 * @param {ReactNode} props.badgeContent Content of the Badge.
 *  The specific libraray props of Badge Component
 * @param {enum} props.color The enum color of Badge.
 * @param {ReactNode} props.children the children on which the badge will append styles.
 */

export interface BadgeProps {
	color?: 'default' | 'primary' | 'accent';
	children?: Node;
}
class Badge extends React.Component<BadgeProp & BadgeProps, {}> {
	render() {
		return (<BadgeUi badgeContent={this.props.badgeContent} classes={{ ...this.props.style }} {...this.props} color={this.props.color}>{this.props.children}</BadgeUi>);
	}

}

export default Badge;