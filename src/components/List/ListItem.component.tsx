/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ListItem } from 'material-ui';
import { ListItemProp } from '@blueeast/bluerain-ui-interfaces';

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
  * @param {func} props.onClick If button/active, function to be called back when clicked.
  */

export interface MUIProps {
	className?: string,
	button?: boolean,
	component?: string,
	href?: string,
	onClick?: ()=> void,
	disabled?: boolean,
}

const BlueRainListItem = (props: ListItemProp & MUIProps) => {
	return (
        <ListItem
            button={props.active}
            {...props}
        >
        {props.children}
        </ListItem>
	);
};

export default BlueRainListItem;