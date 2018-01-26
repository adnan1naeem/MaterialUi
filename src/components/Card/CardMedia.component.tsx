import { CardMedia } from 'material-ui/Card';
import { ICardMedia } from '@blueeast/bluerain-ui-interfaces/Components/Card';
import React from 'react';

/**
 * The props of CardMedia Component
 * @param {Object} props.style style object for Card's style.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 * @param {number} props.height height of the image.
 */


const BlueRainCardMedia = (props: ICardMedia) => {
	const heightedStyle = { ...props.style, height: props.height || 200 };
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