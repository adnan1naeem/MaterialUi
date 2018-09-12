import * as React from 'react';
import { ListItemProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The props of ListItem Component
 * @param {Object} props.style style object for ListItem's style.
 * @param {Node} props.children Children of ListItem.
 * @param {boolean} props.active If true, ListItem is rendered in active state.
 */
/**
 * Platform specific props
 * @param {string} props.className className to extend styling of Listitem.
 * @param {bool} props.button If true, ListItem will be a button.
 * @param {string} props.component component with which ListItem will be rendered.
 * @param {string} props.href src to which the ListItem will be directed.
 * @param {func} props.onPress If button/active, function to be called back when clicked.
 */
export interface MUIListItemProperties extends ListItemProperties {
    className?: string;
    button?: boolean;
    component?: string;
    href?: string;
    disabled?: boolean;
    avatarSize?: number;
}
declare const BlueRainListItem: React.StatelessComponent<MUIListItemProperties>;
export default BlueRainListItem;
