import React, { ReactNode } from 'react';
import { TextInputProp } from '@blueeast/bluerain-ui-interfaces';
import TextField from 'material-ui/TextField';

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

export interface MaterialTextInput {
	autoComplete?: string,
	autoCorrect?: string,
	id?: string,
	label?: string,
	className?: any,
	margin?: 'none' |
    'dense' |
    'normal',
	required?: boolean,
	error?: boolean,
	type?: string,
	rowsMax?: string,
	rows?: string,
	helperText?: ReactNode,
	InputLabelProps?: object,
	fullWidth?: boolean,
	errorText?: ReactNode,
}

const BlueRainTextInput = (props: TextInputProp & MaterialTextInput) => {
	let disabled = false;
	if(props.editable !== undefined && !props.editable) {
		disabled = true;
	}
	return (
	<TextField
		style={props.style}
		placeholder={props.placeholder}
		autoFocus={props.autoFocus}
		onChange={props.onChange}
		rows={props.numberOfLines}
		disabled={disabled}
		helperText={props.errorText}
		{...props}
	/>
	);
};

export default BlueRainTextInput;
