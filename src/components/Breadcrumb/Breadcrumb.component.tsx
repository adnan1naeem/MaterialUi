import React from 'react';
import { withBlueRain, BlueRainType } from '@blueeast/bluerain-os';
import { Link, MemoryRouter } from 'react-router-dom';

/**
 * The props of Breadcrumb Component
 * @param {string} props.label The label of the Breadcrumb Component
 * @param {Array} props.data Array of object of data containing label and path of breadcrumb as an object
 * @param {string} props.colorActive The color of the active (current) page's label
 * @param {string} props.colorPrev The color of the previous page(s)'s label(s)
 */

type Props = {
	label: string,
    data: Array<{title:string,path:string}>,
    colorActive: string,
    colorPrev: string,
	bluerain: BlueRainType,
};


const styles = {

	root: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},

	colorPrev: {
		color: 'dodgerblue',
		textDecoration: 'none',
	},

	colorActive: {
		color: 'black',
	},

	black: {
		color: 'black',
	},
};

const Breadcrumb = ({ label, data, colorActive, colorPrev, bluerain }: Props) => {

	const View = bluerain.Components.get('View');
	const Text = bluerain.Components.get('Text');

	if (data) {
		const listItems = data.map(item =>
  <MemoryRouter key={item.title}><View style={styles.root}> <Link style={colorPrev ? { color: colorPrev, textDecoration: 'none' } : styles.colorPrev} to={item.path}>{item.title}</Link><Text style={styles.black}> / </Text></View></MemoryRouter>
				);
		return (
  <View style={styles.root} >{listItems}<Text style={colorPrev ? { color: colorActive } : styles.colorActive}>{label}</Text></View>);
	}
	return (<Text style={colorPrev ? { color: colorActive } : styles.colorActive}>{label}</Text>);

};



export default withBlueRain(Breadcrumb);