/// <reference types="react" />
import * as React from 'react';
import { ListItemAvatarProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The props of ListItemAvatar Component
 * @param {Object} props.style style object for ListItemAvatar's style.
 * @param {number} props.size size of the ListItemAvatar.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 */
export interface MUIListItemAvatarProperties extends ListItemAvatarProperties {
    children?: any;
}
declare const BlueRainListItemAvatar: React.StatelessComponent<MUIListItemAvatarProperties>;
export default BlueRainListItemAvatar;
