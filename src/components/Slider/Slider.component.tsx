import * as React from 'react';
import Slider from '@material-ui/lab/Slider';
import { SliderProperties } from '@blueeast/bluerain-ui-interfaces';


/**
 * The universal props of Divider Component
 * @param {ReactNode} props.light If true, Divider is generated with light color.
 *  The specific libraray props of Divider Component
 * @param {ReactNode} props.component component to generate Divider with.
 * @param {ReactNode} props.inset if true, Divider is generated indented.
 */

export interface MUISliderProperties extends SliderProperties {
  classes?: object,
  onChange?: (event: any, value: any) => void,
  onDragEnd?: () => void,
  onDragStart?: () => void,
  thumb?: React.ReactElement<any>,
  vertical?: boolean,
  defaultValue?: any

}
const BlueRainSlider: React.StatelessComponent<MUISliderProperties> = (props) => {
  const { maximumValue, minimumValue, onValueChange, onSlidingComplete, step, ...others } = props;
  return (
    <Slider
      max={maximumValue}
      min={minimumValue}
      onChange={onValueChange}
      onDragEnd={onSlidingComplete}
      step={step}
      {...others} 
    />
  );
};

export default BlueRainSlider;

