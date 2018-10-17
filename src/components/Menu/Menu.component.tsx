// // import Menu, { MenuItem } from 'material-ui/Menu';
// import { Menu } from 'material-ui';
// // import React, { ReactNode } from 'react';
// import React from 'react';
// import { MenuProperties } from '@blueeast/bluerain-ui-interfaces';

// /**
//  * The props of DropDown Component
//  * @param {boolean} props.autoWidth for Auto width.
//  * @param {Object} props.classes style object for DopDown style.
//  * @param {boolean} props.displayEmpty If true, the selected item is displayed even if its value is empty.
//  * You can only use it when the native property is false (default)..
//  * @param {ReactNode} props.input An Input element; does not have to be a material-ui specific Input.
//  * @param {Object} props.MenuProps Properties applied to the Menu element.
//  * @param {boolean} props.native If true, the component will be using a native select element.
//  * @param {Node} props.renderValue Render the selected value.
//  * You can only use it when the native property is false (default).
//  * @param {Node} props.value The input value, required for a controlled component.
//  * @param {boolean} props.disabled disables the selection.
//  */
// // export interface MUIPickerProperties extends MenuProperties {
// // 	autoWidth?:boolean,
// // 	classes?:object,
// // 	displayEmpty?:boolean,
// // 	input?:ReactNode,
// // 	MenuProps?:object,
// // 	native?:boolean,
// // 	renderValue?:any,
// // 	value?:any,
// // 	onChange?:any,
// // 	disabled?:boolean
// // }

// const BRMenu: React.StatelessComponent<MenuProperties & { open: boolean }> = (props) => (
// 	<Menu
// 		open={props.open}
// 		{...props}
// 	>
// 		{props.children}
// 	</Menu>
// );

// export default BRMenu;
// export { MenuProperties };
