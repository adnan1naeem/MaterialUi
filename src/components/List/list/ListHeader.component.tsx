/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { IListHeader } from 'bluerain-ui-interfaces/Components/List';
import { ListSubheader } from 'material-ui';

/**
 * The props of ListHeader Component
 * @param {Node} props.children children of ListHeader.
 * @param {Object} props.style style object for ListHeader's style.
 */


const ListHeader = (props: IListHeader) => {
    return (
        <ListSubheader
            {...props}
        >{props.children}
        </ListSubheader>
    );

};

export default ListHeader;