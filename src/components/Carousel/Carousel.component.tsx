// import './style.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { CarouselProp } from '@blueeast/bluerain-ui-interfaces';
import { withBlueRain } from '@blueeast/bluerain-os';
import React from 'react';
import Slider from 'react-slick';

/**
 * * This is the list of the props which this component accepts
 * @param {boolean} props.dots Dots to be shown or not.
 * @param {boolean} props.infinite Scrolling is infinite or not.
 * @param {number} props.speed Speed of the scrolling.
 * @param {number} props.slidesToShow Number of slides to be shown.
 * @param {number} props.slidesToScroll Number of slides to scroll.
 * @param {array} props.banners Data to be shown in scroll.
 * @name Home Banner Component
 */

export interface Icaros {
	bluerain:any
}
const CarouselComponent = (props: CarouselProp & Icaros ) => {
	const {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    bluerain: BR
	} = props;

	const myData = props.children.props.children;
	const settings = {
		dots: dots,
		infinite: infinite,
		speed: speed,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToScroll
	};
	
	return (
    <Slider {...settings}>
      {myData}
    </Slider>
	);
};

export default withBlueRain(CarouselComponent);
