import * as React from 'react';
import { DividerProps } from '@blueeast/bluerain-ui-interfaces';
import Divider from 'material-ui/Divider';


/**
 * The universal props of Badge Component
 * @param {Object} props.style Get the style object.
 * @param {ReactNode} props.badgeContent Content of the Badge.
 *  The specific libraray props of Badge Component
 * @param {enum} props.color The enum color of Badge.
 * @param {ReactNode} props.children the children on which the badge will append styles.
 */

// export interface IBadgeProps {
// 	color?: 'default' | 'primary' | 'accent';
// 	children?: Node;
// }
class BlueRainDivider extends React.Component<DividerProps, {}> {
	render() {
		return (<Divider badgeContent={this.props.badgeContent} classes={{ ...this.props.style }} {...this.props} color={this.props.color} />);
	}

}

export default BlueRainDivider;