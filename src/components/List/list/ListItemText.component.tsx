/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { IListItemText } from 'bluerain-ui-interfaces/Components/List';
import { ListItemText } from 'material-ui/List';

/**
 * The props of CardBody Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.children tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */

const BlueRainListItemText = (props: IListItemText) => {
    return (
        <ListItemText
            {...props}
        >
        {props.children}
        </ListItemText>
    );

};

export default BlueRainListItemText;