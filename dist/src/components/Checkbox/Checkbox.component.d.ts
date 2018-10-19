/**
 * Created by M.Ghaznfar on 3/3/18.
 */
import { ReactNode } from 'react';
import { CheckboxProperties } from '@blueeast/bluerain-ui-interfaces';
export interface MUIProps extends CheckboxProperties {
    color?: 'primary' | 'secondary' | 'default';
    type?: string;
    inputRef?: () => {};
    inputProps?: {};
    indeterminateIcon?: ReactNode;
    indeterminate?: boolean;
    id?: string;
    icon?: ReactNode;
    disableRipple?: boolean;
    classes?: object;
    checkedIcon?: ReactNode;
    label?: ReactNode;
}
declare const BlueRainCheckbox: (props: MUIProps) => JSX.Element;
export default BlueRainCheckbox;
