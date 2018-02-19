/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ListItemRightButtonProp } from '@blueeast/bluerain-ui-interfaces';
import { ListItemSecondaryAction } from 'material-ui';
/**
 * The props of ListItemRightButton Component
 * @param {Object} props.style style object for ListItemRightButton's style.
 * @param {Node} props.children children of ListItemRightButton (expects a Button).
 */

const ListItemRightButton: React.StatelessComponent = (props: ListItemRightButtonProp) => {
	return (
        <ListItemSecondaryAction
            {...props}
            style={props.style}
        >
        {props.children}
        </ListItemSecondaryAction>
	);

};

export default ListItemRightButton;