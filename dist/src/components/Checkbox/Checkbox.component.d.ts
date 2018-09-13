/**
 * Created by M.Ghaznfar on 3/3/18.
 */
import React, { ReactNode } from 'react';
import { CheckboxProperties } from '@blueeast/bluerain-ui-interfaces';
export interface MUIProps extends CheckboxProperties {
    color?: 'default' | 'inherit' | 'primary' | 'accent' | 'contrast' | undefined;
    type?: string;
    onChange?: (e: any) => {};
    inputRef?: () => {};
    inputProps?: {};
    indeterminateIcon?: ReactNode;
    indeterminate?: boolean;
    id?: string;
    icon?: ReactNode;
    disableRipple?: boolean;
    classes?: {};
    checkedIcon?: ReactNode;
    label?: ReactNode;
}
declare class BlueRainCheckbox extends React.Component<MUIProps, {
    checked: boolean | string;
}> {
    constructor(props: MUIProps);
    handleChange: (name: any) => (event: any) => void;
    render(): JSX.Element;
}
export default BlueRainCheckbox;
