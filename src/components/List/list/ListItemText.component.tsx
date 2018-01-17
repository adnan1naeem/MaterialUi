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

 export interface IMUIProps {
     primary?: any,
     secondary?: any,
 }

const BlueRainListItemText = (props: IListItemText & IMUIProps) => {
    return (
        <ListItemText
            {...props}
            primary={props.children}
        />
    );

};

export default BlueRainListItemText;