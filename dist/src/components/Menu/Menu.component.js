"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Menu, { MenuItem } from 'material-ui/Menu';
const material_ui_1 = require("material-ui");
// import React, { ReactNode } from 'react';
const react_1 = __importDefault(require("react"));
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
// export interface MUIPickerProperties extends MenuProperties {
// 	autoWidth?:boolean,
// 	classes?:object,
// 	displayEmpty?:boolean,
// 	input?:ReactNode,
// 	MenuProps?:object,
// 	native?:boolean,
// 	renderValue?:any,
// 	value?:any,
// 	onChange?:any,
// 	disabled?:boolean
// }
const BRMenu = (props) => (react_1.default.createElement(material_ui_1.Menu, Object.assign({ open: props.open }, props), props.children));
exports.default = BRMenu;
//# sourceMappingURL=Menu.component.js.map