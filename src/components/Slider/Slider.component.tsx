import { SliderProperties } from '@blueeast/bluerain-ui-interfaces';
import { withBlueRain } from '@blueeast/bluerain-os';
import Range from 'react-range-progress';
import React from 'react';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
	overflow:'visible'
};

/**
 * The universal props of Slider Component for MuiTheme
 * @param {number} props.defautValue value of the slider.
 * @param {number} props.maxValue maxValue of the slider.
 * @param {number} props.minValue minValue of the slider.
 * @param {function} props.onValueChange Invoked when the value changes.
 */

export interface MUIProps extends SliderProperties {
	bluerain?:any
}

const DEFAULT_VALUE = 0;

class Slider extends React.Component<MUIProps,{value:any}>{

	constructor (props:MUIProps) {
		super(props);
		this.onValueChange= this.onValueChange.bind(this);
		this.state= {
			value: props.defaultValue? props.defaultValue : DEFAULT_VALUE,
		};
	}

	onValueChange = (value) => {
		this.setState({ value });
		if(this.props.onValueChange ) {
			this.props.onValueChange(value);
		}
	}

	render() {
		const View = this.props.bluerain? this.props.bluerain.Components.get('View') : 'div';
		const Text = this.props.bluerain? this.props.bluerain.Components.get('Text') : 'span';
		return (
      <View style={styles}>
		<View style={{ display:'flex', justifyContent:'space-between', flexDirection:'row', marginBottom:10 }}>
			<Text>Value</Text>
			<Text>{this.state.value}</Text>
		</View>
		<Range
			thumbSize={10}
			thumbColor={{ r: 0,	g: 188,	b: 212,	a: 1, }}
			value={this.state.value}
			fillColor={{ r: 0,	g: 188,	b: 212,	a: 1, }}
			trackColor={{	r: 158,	g: 158,	b: 158,	a: 1, }}
			height={2}
			width="100%"
			onChange={this.onValueChange}
			min={this.props.minimumValue}
			max={this.props.maximumValue}
			{...this.props}
		/>
      </View>
		);
	}
}
export default withBlueRain(Slider);