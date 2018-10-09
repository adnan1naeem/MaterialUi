import * as React from 'react';
import { SwitchProperties } from '@blueeast/bluerain-ui-interfaces';
import Switch from 'material-ui/Switch';

/**
 * The universal props of Avatar Component
 * @param {boolean} props.disabled if true, switch is rendered in disabled form.
 * @param {boolean} props.value value of the switch.
 * @param {function} props.onValueChange Invoked with the new value when the value changes.
 * @param {Object} props.style Style object for switch component.
 *  The specific libraray props of Badge Component
 * @param {string or boolean} props.checked Keeps the value unchanged.
 * @param {Object} props.classes the children on which the switch will append styles.
 * @param {Object} props.onChange  Invoked with the new value when the value changes.
 */

export interface MUISwitchProperties extends SwitchProperties {
	// checked?: string | undefined | boolean,
	muValue?: string,
	classes?: {},
	onChange?: () => void,
}

const BlueRainSwitch: React.StatelessComponent<MUISwitchProperties> = (props) => {
	return (
		<Switch
			{...props}
			checked={props.value}
			value={props.muValue}
			onChange={props.onValueChange}
		/>
	);
};

export default BlueRainSwitch;
