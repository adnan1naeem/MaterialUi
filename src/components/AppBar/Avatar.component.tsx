import * as React from 'react';
import { BlueRainType, withBlueRain } from '@blueeast/bluerain-os';
import { AppBarProp } from '@blueeast/bluerain-ui-interfaces';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
/////////////////// JSDOCS TO BE ADDED ////////////////

/**
 * The universal props of Avatar Component
 * @param {Object} props.style Get the style object.
 * @param {string} props.src src for Avatar.
 * @param {Node} props.children children of Avatar.
 */

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

const BlueRainAvatar = (props: AppBarProp) => {
	return	<AppBar {...props}/>;

};

export default withBlueRain(BlueRainAvatar);
