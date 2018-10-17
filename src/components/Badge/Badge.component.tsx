// import * as React from 'react';
// import { BadgeProperties } from '@blueeast/bluerain-ui-interfaces';
// import BadgeUi from 'material-ui/Badge';


// /**
//  * The universal props of Badge Component
//  * @param {Object} props.style Get the style object.
//  * @param {ReactNode} props.badgeContent Content of the Badge.
//  *  The specific libraray props of Badge Component
//  * @param {enum} props.color The enum color of Badge.
//  * @param {ReactNode} props.children the children on which the badge will append styles.
//  */

// export interface MUIBadgeProperties extends BadgeProperties {
// 	color?: 'default' | 'primary' | 'accent';
// 	children?: React.ReactNode;
// }

// class Badge extends React.Component<MUIBadgeProperties, {}> {
// 	render() {
// 		return (<BadgeUi badgeContent={this.props.badgeContent} classes={{ ...this.props.style }} {...this.props} color={this.props.color}>{this.props.children}</BadgeUi>);
// 	}

// }

// export default Badge;