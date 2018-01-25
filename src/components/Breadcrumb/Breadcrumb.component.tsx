import React from 'react';
import { withBlueRain, BlueRainType } from '@blueeast/bluerain-os';
import { Link } from 'react-router-dom';
import IBreadcrumb from 'bluerain-ui-interfaces/Components/Breadcrumb';

/**
 * The props of Breadcrumb Component
 * @param {string} props.label The label of the Breadcrumb Component
 * @param {Array} props.data Array of object of data containing label and path of breadcrumb as an object
 * @param {string} props.colorActive The color of the active (current) page's label
 * @param {string} props.colorPrev The color of the previous page(s)'s label(s)
 */

export interface IMUIProps {
	bluerain?: BlueRainType,
}

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

const Breadcrumb = (props: IBreadcrumb & IMUIProps) => {

	const View = props.bluerain.Components.get('View');
	const Text = props.bluerain.Components.get('Text');
	const label = props.label ? props.label : 'Home';

	if (props.data) {
		const listItems = props.data.map(item =>
  <View style={styles.root} key={item.title}> <Link style={props.colorPrev ? { color: props.colorPrev, textDecoration: 'none' } : styles.colorPrev} to={item.path}>{item.title}</Link><Text style={styles.black}> / </Text></View>
				);
		return (
  <View style={styles.root} >{listItems}<Text style={props.colorPrev ? { color: props.colorActive } : styles.colorActive}>{label}</Text></View>);
	}
	return (<Text style={props.colorPrev ? { color: props.colorActive } : styles.colorActive}>{label}</Text>);

};

export default withBlueRain(Breadcrumb);