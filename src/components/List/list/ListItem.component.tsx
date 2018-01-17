/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { IListItem } from 'bluerain-ui-interfaces/Components/List';
import { ListItem } from 'material-ui/List';

/**
 * The props of ListItem Component
 * @param {Object} props.style style object for ListItem's style.
 * @param {Node} props.children Children of ListItem.
 * @param {boolean} props.active If true, ListItem is rendered in active state.
 */

 /**
  * Platform specific props
  * @param {string} props.className className to extend styling of Listitem.
  * @param {bool} props.button If true, ListItgem will be a button.
  * @param {string} props.tag tag with which ListItem will be rendered.
  * @param {string} props.href src to which the ListItem will be directed.
  * @param {boolean} props.action ListItem if generated with action state if true and tag is button.
  * @param {boolean} props.disabled If true, ListItem is rendered disabled.
  */

  export interface IBSProps {
    className?: string,
    button?: boolean,
    component?: string,
    href?: string,
    onClick?: ()=> void,
    }

const BlueRainListItem = (props: IListItem & IBSProps) => {
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