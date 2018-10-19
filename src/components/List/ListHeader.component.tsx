import * as React from 'react';
import { ListHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import ListSubheader from '@material-ui/core/ListSubheader';

/**
 * The props of ListHeader Component
 * @param {Node} props.children children of ListHeader.
 * @param {Object} props.style style object for ListHeader's style.
 */


const ListHeader: React.StatelessComponent<ListHeaderProperties> = (props) => {
	return (
        <ListSubheader
            {...props}
        >{props.children}
        </ListSubheader>
	);

};

export default ListHeader;
