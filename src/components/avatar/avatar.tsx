import * as React from 'react';
import { withBlueRain, BlueRainType } from '@blueeast/bluerain-os';
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
    bluerain?: BlueRainType,
}

const BlueRainAvatar = (props: IAvatar & IAvatarProps) => {
    const size = props.size? props.size: 70;
    const avatarStyle = [{width:size, height:size, backgroundColor:'lightgrey', borderRadius:1000, display:'flex', justifyContent:'center', alignItems:'center', fontSize:.5*size}, {...props.style}];
    const View = props.bluerain.Components.get('View');
    const Text = props.bluerain.Components.get('Text');
    const Image = props.bluerain.Components.get('Image');
    if (props.children) {
    return <View style={avatarStyle}><Text style={{display:'flex'}}>{props.children}</Text></View>;
}
 return <Image source={props.src} style={avatarStyle} />;

};

export default withBlueRain(BlueRainAvatar);