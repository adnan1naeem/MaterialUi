import React, { ReactNode } from 'react';
import { TextInputProperties } from '@blueeast/bluerain-ui-interfaces';
import TextField from '@material-ui/core/TextField';

// import TextField from '@material-ui/core/TextField';
/**
 * The props of IMaterialTextInput Component
 * @param {string} props.autoComplete for auto complete
 * @param {string} props.autoCorrect for auto correct
 * @param {string} props.id id of the text input
 * @param {string} props.label label of input
 * @param {any} props.className classes to style text input
 * @param {enum} props.margin normal or dense
 * @param {boolean} props.required boolean to make text input a required field
 * @param {boolean} props.error If true, the label will be displayed in an error state.
 * @param {string} props.type Type attribute of the Input element. It should be a valid HTML5 input type.
 */

export interface MUITextInputProperties extends TextInputProperties {
	autoComplete?: string, //
	autoCorrect?: string,
	id?: string, //
	label?: ReactNode | string, //
	className?: any,
	margin?: 'none' | //
	'dense' | //
	'normal', //
	required?: boolean, //
	error?: boolean, //
	type?: string, //
	rowsMax?: string | number, //
	rows?: string | number, //
	helperText?: ReactNode, //
	InputLabelProps?: object, //
	fullWidth?: boolean, //
	errorText?: ReactNode, //
	defaultValue?: string //
	FormHelperTextProps?: object, //
	inputProps?: object, //
	inputRef?: () => void | object; //
	name?: string, //
	select?: boolean, //
	SelectProps?: object, //
	variant?: 'standard' | 'outlined' | 'filled' | any,
	// variant:
}

const customOnChange = (props: any) => (event: any) => {
	if (props.onChange) { props.onChange(event); }
	if (props.onChangeText) { props.onChangeText(event.target.value); }
};

const BlueRainTextInput: React.StatelessComponent<MUITextInputProperties> = (rawProps) => {
	const { onChangeText, secureTextEntry, keyboardType, variant, ...props } = rawProps;
	let disabled = false;
	if (props.editable !== undefined && !props.editable) {
		disabled = true;
	}
	// const label = props.placeholder ? props.placeholder : props.label;
	return (
		<TextField
			{...props}
			type={props.secureTextEntry ? 'password' : props.type}
			style={props.style}
			placeholder={props.placeholder}
			autoFocus={props.autoFocus}
			onChange={(props.onChange || onChangeText) ? customOnChange(rawProps) : undefined}
			rows={props.numberOfLines}
			disabled={disabled}
			helperText={props.errorText}
			defaultValue={props.defaultValue}
			variant={variant}
		/>
	);
};

export default BlueRainTextInput;
