import * as React from 'react';
import { ListItemIcon } from 'material-ui';
import { ListItemIconProperties } from '@blueeast/bluerain-ui-interfaces';

/**
 * The props of ListItemIcon Component
 * @param {Object} props.style style object for ListItemIcon's style.
 * @param {Node} props.children children of ListItemIcon.
 */

const BlueRainListItemIcon: React.StatelessComponent<ListItemIconProperties> = (props) => {
	return (
        <ListItemIcon
            {...props}
        >
        {props.children}
        </ListItemIcon>
	);

};

export default BlueRainListItemIcon;
