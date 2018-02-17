import * as React from 'react';
import { Icon } from 'react-fa';
import { IconProp } from '@blueeast/bluerain-ui-interfaces';

/**
 * The props of Icon
 * @param {string} props.name The name of the icon
 * The icons are fonts and you can change the color of them just with the css color property.
 * So, changing the color of the font, you will change the background.
 * Now, fonts have no border-color property, but you can simulate it using text-shadow
 */

export interface MUIIconProps {
	borderColor?: string;
}

let iconName;
let iconColor;
const IconComponent = (props: IconProp & MUIIconProps) => {
	const {
    name,
    size,
    color,
    borderColor
  } = props;
	iconColor = color;
	switch(name) {
	case 'cart':
		iconName = 'shopping-cart';
		break;
	case 'menu':
		iconName = 'bars';
		break;
	case 'settings':
		iconName = 'gear';
		break;
	case 'bulb':
		iconName = 'lightbulb-o';
		break;
	case 'heart':
		if (borderColor){
			iconName='heart-o';
			iconColor= borderColor;
		}else{
			iconName=name;
		}
		break;
	default:
		iconName = name;
	}
	return (
    <Icon name={iconName} style={{ fontSize: size, color: iconColor }} {...props}/>
	);
};
export default IconComponent;
