import * as React from 'react';
import { BlueRain, withBlueRain } from '@blueeast/bluerain-os';
import { AvatarProperties } from '@blueeast/bluerain-ui-interfaces';

/**
 * The universal props of Avatar Component
 * @param {Object} props.style Get the style object.
 * @param {string} props.src src for Avatar.
 * @param {Node} props.children children of Avatar.
 *  The specific libraray props of Badge Component
 * @param {string} props.alt The enum color of Badge.
 * @param {Object} props.classes the children on which the badge will append styles.
 * @param {string or function} props.component The enum color of Badge.
 * @param {Object} props.imgProps the children on which the badge will append styles.
 * @param {string} props.sizes The sizes of image.
 */

export interface MUIAvatarProperties extends AvatarProperties {
	alt?: string;
	children?: React.ReactNode;
	classes?: {};
	component?: any;
	imgProps?: {};
	sizes?: string;
	src?: string;
	style?: {};
	bluerain?: BlueRain;
}
const BlueRainAvatar = (props: MUIAvatarProperties) => {
	const size = props.size ? props.size : 70;
	const avatarStyle = [
		{
			width: size,
			height: size,
			backgroundColor: 'lightgrey',
			borderRadius: 1000,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			// 	fontSize: 0.5 * size
		},
		{ ...props.style }
	];
	const View = props.bluerain ? props.bluerain.Components.get('View') : 'div';
	// const Text = props.bluerain ? props.bluerain.Components.get('Text') : 'div';
	const Image = props.bluerain ? props.bluerain.Components.get('Image') : 'img';
	if (props.children) {
		return <View style={avatarStyle}>{props.children}</View>;
	}
	return <Image source={props.src} style={avatarStyle} />;
};

export default withBlueRain(BlueRainAvatar);

// export const BlueRainAvatar: React.StatelessComponent<MUIAvatarProperties> = props => (
//  <BlueRainConsumer>
// 	 {(BR: BlueRain) => (
// 		 <Avatar {...props}>
// 		 </Avatar>
// 	 )}
//  </BlueRainConsumer>
// );

