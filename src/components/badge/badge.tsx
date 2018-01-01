import * as React from 'react';
import  BR  from '@blueeast/bluerain-os';
import BadgeUi from 'material-ui/Badge';
import { FormattedMessage } from 'react-intl';
import { IBadge } from '@blueeast/bluerain-ui-interfaces/Components/Badge';

export interface IBadgeProps {
    color?: any;
    children?: Node;
    className?: any;
}
const Badge = (props: IBadge & IBadgeProps) => {
    return (<BadgeUi badgeContent={props.badgeContent} classes={{...props.style}} {...props} color={props.color}>{props.children}</BadgeUi>);

};

export default Badge;