import * as React from 'react';
import { ListItemAvatarProp } from '@blueeast/bluerain-ui-interfaces';
import Avatar from '../Avatar';

/**
 * The props of ListItemAvatar Component
 * @param {Object} props.style style object for ListItemAvatar's style.
 * @param {number} props.size size of the ListItemAvatar.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 */
export interface MUIListItemAvatarProp extends ListItemAvatarProp {
	children?: any,
}

const BlueRainListItemAvatar: React.StatelessComponent<MUIListItemAvatarProp> = (props) => {
	return (
        <Avatar {...props} size={props.size}>{props.children}</Avatar>
	);
};

export default BlueRainListItemAvatar;
