import * as React from 'react';
import BR from '@blueeast/bluerain-os';
import Avatar from 'material-ui/Avatar';
// import { IBadge } from 'bluerain-ui-interfaces/Components/Badge';

export interface IAvatar {
    children?: JSX.Element | string;
    size?: number,
    src?: string,
    style?: {},
}
/**
 * The universal props of Avatar Component
 * @param {Object} props.style Get the style object.
 * @param {string} props.src src for Avatar.
 * @param {Node} props.children children of Avatar.
 *  The specific libraray props of Badge Component
 * @param {string} props.alt The enum color of Badge.
 * @param {Object} props.classes the children on which the badge will append styles.
 * @param {string or function} props.component The enum color of Badge.
 * @param {Object} props.imgProps the children on which the badge will append styles.
 * @param {string} props.sizes The sizes of image.
 */

export interface IAvatarProps {
    alt?: string,
    children?: JSX.Element | string;
    classes?: {},
    component?: any,
    imgProps?: {},
    sizes?: string,
    src?: string,
    style?: {},
}
const BlueRainAvatar = (props: IAvatarProps & IAvatar) => {
    const size = props.size? props.size: 70;
    const avatarStyle = [{width:size, height:size, backgroundColor:'lightgrey', borderRadius:1000, display:'flex', justifyContent:'center', alignItems:'center', fontSize:.5*size}, {...props.style}];
    return (
        <Avatar
            style={avatarStyle}
            {...props}
        >
        {props.children}
        </Avatar>
    );

};

export default BlueRainAvatar;