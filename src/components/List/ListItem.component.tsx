import * as React from 'react';
import { ListItem , ListItemSecondaryAction, ListItemText } from 'material-ui';
import { ListItemProperties } from '@blueeast/bluerain-ui-interfaces';
import { Avatar } from '../Avatar';

/**
 * The props of ListItem Component
 * @param {Object} props.style style object for ListItem's style.
 * @param {Node} props.children Children of ListItem.
 * @param {boolean} props.active If true, ListItem is rendered in active state.
 */

/**
 * Platform specific props
 * @param {string} props.className className to extend styling of Listitem.
 * @param {bool} props.button If true, ListItem will be a button.
 * @param {string} props.component component with which ListItem will be rendered.
 * @param {string} props.href src to which the ListItem will be directed.
 * @param {func} props.onPress If button/active, function to be called back when clicked.
 */

export interface MUIListItemProperties extends ListItemProperties {
    className?: string,
    button?: boolean,
    component?: string,
    href?: string,
    disabled?: boolean,
    avatarSize?:number,
}

const BlueRainListItem: React.StatelessComponent<MUIListItemProperties> = (props) => {
    return (
        <ListItem
            button={props.active}
            onClick={props.onPress}
            {...props}
        >
            {
                typeof props.avatar === 'string'
                    ?
                    <Avatar
                        src={props.avatar}
                        size={props.avatarSize?props.avatarSize:40}
                    />
                     :
                    props.avatar
            }
            {
                (props.primary || props.secondary) ?
                <ListItemText
                    primary={props.primary ? props.primary : ''}
                    secondary={props.secondary ? props.secondary : ''}
                /> : null
            }
            {
                props.children ?
                <ListItemText primary={props.children}/>
                : null
            }
            {
                props.action
                    ?
                    <div >
                        {props.action}
                    </div>
                    : null
            }
        </ListItem>
    );
};

export default BlueRainListItem;
