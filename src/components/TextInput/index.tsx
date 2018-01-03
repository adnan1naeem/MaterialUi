import React, {ReactNode} from 'react';
import {ITextInput} from '@blueeast/bluerain-ui-interfaces/Components/TextInput';
import {TextField} from 'material-ui';

export interface IMaterialTextInput {
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
    fullWidth?: boolean
}

const BlueRainTextInput = (props: ITextInput & IMaterialTextInput) => {
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
            {...props}
        />
    );
};

export default BlueRainTextInput;
