
import * as React from 'react';
import { ISlider } from 'bluerain-ui-interfaces/Components/Slider';
import { withBlueRain } from '@blueeast/bluerain-os';
import Typography from 'material-ui/Typography';

/**
 * The universal props of Slider Component
 * @param {boolean} props.disabled if true, slider is rendered in disabled form.
 * @param {number} props.value value of the slider.
 * @param {number} props.step value of step for the slider.
 * @param {number} props.maxValue maxValue of the slider.
 * @param {number} props.minValue minValue of the slider.
 * @param {function} props.onSlidingComplete Invoked when the slider is completely stopped.
 * @param {function} props.onValueChange Invoked when the value changes.
 * @param {Object} props.style Style object for switch component.
 * The Specific library props
 */

export interface ISliderProps {
	className?:string,
	bluerain?: any,
}
const BlueRainSlider = (props: ISlider & ISliderProps) => {
	const View = props.bluerain.Components.get('View');
	return (
    <View>
      <input type="range"/>
    </View>
	);
};

export default withBlueRain(BlueRainSlider);
