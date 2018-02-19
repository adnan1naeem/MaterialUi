/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ListItemText } from 'material-ui';
import { ListItemTextProp } from '@blueeast/bluerain-ui-interfaces';

/**
 * The props of ListItemText Component
 * @param {Object} props.style style object for ListItemText's style.
 * @param {Node} props.children children of ListItemText.
 * @param {string} props.className className for styling component with css.
 * Platform specific props
 * @param {Node} props.primary primary text for ListItemText.
 * @param {Node} props.secondary secondary text for ListItemText.
 * @param {bool} props.inset If true, the children will be indented. This should be used if there is no left avatar or left icon.
 */

export interface MUIProps {
	primary?: any,
	secondary?: any,
	inset?: boolean,
}

const BlueRainListItemText: React.StatelessComponent = (props: ListItemTextProp & MUIProps) => {
	return (
        <ListItemText
            primary={props.children}
            {...props}
        />
	);

};

export default BlueRainListItemText;