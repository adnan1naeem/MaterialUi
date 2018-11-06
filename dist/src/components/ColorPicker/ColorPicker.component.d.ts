import { ColorPickerProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
export interface MUIProps extends ColorPickerProperties {
    value?: {
        h?: number;
        s?: number;
        l?: number;
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } | string | any;
    hs: boolean;
}
declare class ColorPicker extends React.Component<MUIProps, {
    color?: {
        h?: number;
        s?: number;
        l?: number;
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } | string;
    displayColorPicker: boolean;
}> {
    constructor(props: MUIProps);
    handleClick: () => void;
    handleClose: () => void;
    handleChangeHsl: (color: any) => void;
    handleChangeRgb: (color: any) => void;
    getColorPicker(hs: boolean, backgroundColor: string): JSX.Element;
    render(): JSX.Element;
}
export { ColorPicker };
