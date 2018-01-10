/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ICardMedia } from 'bluerain-ui-interfaces/Components/Card';
import { CardMedia } from 'material-ui/Card';

/**
 * The props of CardMedia Component
 * @param {Object} props.style style object for Card's style.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 * @param {number} props.height height of the image.
 */


const BlueRainCardMedia = (props: ICardMedia) => {
    const heightedStyle = {...props.style, height: props.height || 200};
    return (
        <CardMedia
            style={heightedStyle}
            image={props.src}
            src={props.src}
            {...props}
        />
    );

};

export default BlueRainCardMedia;