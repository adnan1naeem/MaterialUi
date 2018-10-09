import React, { ReactNode } from 'react';
import { TextInputProperties } from '@blueeast/bluerain-ui-interfaces';
export interface MUITextInputProperties extends TextInputProperties {
    autoComplete?: string;
    autoCorrect?: string;
    id?: string;
    label?: ReactNode | string;
    className?: any;
    margin?: 'none' | //
    'dense' | //
    'normal';
    required?: boolean;
    error?: boolean;
    type?: string;
    rowsMax?: string | number;
    rows?: string | number;
    helperText?: ReactNode;
    InputLabelProps?: object;
    fullWidth?: boolean;
    errorText?: ReactNode;
    defaultValue?: string;
    FormHelperTextProps?: object;
    inputProps?: object;
    InputProps?: object;
    inputRef?: () => void | object;
    name?: string;
    select?: boolean;
    SelectProps?: object;
}
declare const BlueRainTextInput: React.StatelessComponent<MUITextInputProperties>;
export default BlueRainTextInput;
