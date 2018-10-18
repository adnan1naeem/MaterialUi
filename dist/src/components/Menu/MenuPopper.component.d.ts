/// <reference types="react" />
import React, { ReactNode } from 'react';
/**
 * The props of DropDown Component
 * @param {boolean} props.autoWidth for Auto width.
 * @param {Object} props.classes style object for DopDown style.
 * @param {boolean} props.displayEmpty If true, the selected item is displayed even if its value is empty.
 * You can only use it when the native property is false (default)..
 * @param {ReactNode} props.input An Input element; does not have to be a material-ui specific Input.
 * @param {Object} props.MenuProps Properties applied to the Menu element.
 * @param {boolean} props.native If true, the component will be using a native select element.
 * @param {Node} props.renderValue Render the selected value.
 * You can only use it when the native property is false (default).
 * @param {Node} props.value The input value, required for a controlled component.
 * @param {boolean} props.disabled disables the selection.
 */
export interface MenuPopperprops {
    children?: ReactNode;
    open: boolean;
    anchorEl?: any;
    container?: any;
    disablePortal?: boolean;
    keepMounted?: boolean;
    modifiers?: object;
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    popperOptions?: object;
    transition?: boolean;
}
declare const BRMenuPopper: React.StatelessComponent<MenuPopperprops>;
export default BRMenuPopper;
