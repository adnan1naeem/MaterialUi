import * as React from 'react';
import  BR  from '@blueeast/bluerain-os';
import BadgeUi from 'material-ui/Badge';
import { FormattedMessage } from 'react-intl';
import { IBadge } from '@blueeast/bluerain-ui-interfaces/Components/Badge';

/**
 * The universal props of Badge Component
 * @param {Object} props.style Get the style object
 * @param {ReactNode} props.children Content of the Badge
 * The universal props of Badge Component
 * @param {enum} props.color The enum color of Badge.
 * @param {ReactNode} props.className the className for styles.
 */

export interface IBadgeProps {
    color?: 'default' | 'primary' | 'accent';
    children?: Node;
    className?: string;
}
const Badge = (props: IBadge & IBadgeProps) => {
    return (<BadgeUi badgeContent={props.badgeContent} classes={{...props.style}} {...props} color={props.color}>{props.children}</BadgeUi>);

};

export default Badge;