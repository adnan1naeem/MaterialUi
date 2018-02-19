/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ListHeaderProp } from '@blueeast/bluerain-ui-interfaces';
import { ListSubheader } from 'material-ui';

/**
 * The props of ListHeader Component
 * @param {Node} props.children children of ListHeader.
 * @param {Object} props.style style object for ListHeader's style.
 */


const ListHeader: React.StatelessComponent = (props: ListHeaderProp) => {
	return (
        <ListSubheader
            {...props}
        >{props.children}
        </ListSubheader>
	);

};

export default ListHeader;