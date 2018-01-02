import * as React from 'react';
import BR from '@blueeast/bluerain-os';
import BadgeUi from 'material-ui/Badge';
import { FormattedMessage } from 'react-intl';
import { IBadge } from '@blueeast/bluerain-ui-interfaces/Components/Badge';

/**
 * The universal props of Badge Component
 * @param {Object} props.style Get the style object
 * @param {ReactNode} props.badgeContent Content of the Badge
 * The universal props of Badge Component
 * @param {enum} props.color The enum color of Badge.
 * @param {ReactNode} props.className the className for styles.
 */

export interface IBadgeProps {
    color?: 'default' | 'primary' | 'accent';
    children?: Node;
    className?: string;
}
class Badge extends React.Component<IBadge & IBadgeProps, {}> {
    render() {
        return (<BadgeUi badgeContent={this.props.badgeContent} classes={{ ...this.props.style }} {...this.props} color={this.props.color}>{this.props.children}</BadgeUi>);
    }

}

export default Badge;