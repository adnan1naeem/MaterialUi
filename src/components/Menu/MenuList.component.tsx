import MenuList from '@material-ui/core/MenuList';
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


export interface MenuListprops {
  children?: ReactNode
}

const BRMenuList: React.StatelessComponent<MenuListprops> = (props) => (
  <MenuList>
    {props.children}
  </MenuList>
);

export default BRMenuList;
