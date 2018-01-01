import * as React from 'react';
import  BR  from '@blueeast/bluerain-os';
import BadgeUi from 'material-ui/Badge';
import { FormattedMessage } from 'react-intl';
import { IBadge } from '@blueeast/bluerain-ui-interfaces/Components/Badge';

const Badge = (props: IBadge) => {
    return (<BadgeUi badgeContent {...props}></BadgeUi>);

};

export default Badge;