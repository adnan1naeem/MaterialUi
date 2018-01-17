/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { IListItemRightButton } from 'bluerain-ui-interfaces/Components/List';
import { ListItemSecondaryAction } from 'material-ui/List';
/**
 * The props of ListItemRightButton Component
 * @param {Object} props.style style object for ListItemRightButton's style.
 * @param {Node} props.children children of ListItemRightButton (expects a Button).
 */

const ListItemRightButton = (props: IListItemRightButton) => {
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