/// <reference types="react" />
import * as React from 'react';
import { BadgeProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * The universal props of Badge Component
 * @param {Object} props.style Get the style object.
 * @param {ReactNode} props.badgeContent Content of the Badge.
 *  The specific libraray props of Badge Component
 * @param {enum} props.color The enum color of Badge.
 * @param {ReactNode} props.children the children on which the badge will append styles.
 */
export interface MUIBadgeProperties extends BadgeProperties {
    color?: 'default' | 'primary' | 'secondary' | 'error';
    children?: React.ReactNode;
}
declare class Badge extends React.Component<MUIBadgeProperties, {}> {
    render(): JSX.Element;
}
export default Badge;
