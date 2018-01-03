import React,{ReactNode} from 'react';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import  {IPicker} from '@blueeast/bluerain-ui-interfaces/Components/Picker';
/**
 * The props of DropDown Component
 * @param {boolean} props.autoWidth for Auto width.
 * @param {Object} props.classes style object for DopDown style.
 * @param {boolean} props.displayEmpty If true, the selected item is displayed even if its value is empty. You can only use it when the native property is false (default)..
 * @param {ReactNode} props.input An Input element; does not have to be a material-ui specific Input.
 * @param {Object} props.MenuProps Properties applied to the Menu element.
 * @param {boolean} props.native If true, the component will be using a native select element.
 * @param {Node} props.renderValue Render the selected value. You can only use it when the native property is false (default).
 * @param {Node} props.value The input value, required for a controlled component.
 * @param {boolean} props.disabled disables the selection.
 */
interface IMaterialuiDropDown {
    autoWidth?:boolean,
    classes?:object,
    displayEmpty?:boolean,
    input?:ReactNode,
    MenuProps?:object,
    native?:boolean,
    renderValue?:Function,
    disabled?:boolean
};
 const DropDown =(props:IPicker & IMaterialuiDropDown) =>(
            <Select
                onChange={props.onValueChange}
                value={props.selectedValue}
                {...props}>
                </Select>
);

const DropdownItem = (props:IPicker  & IMaterialuiDropDown) => (<MenuItem {...props} />);
export { DropdownItem, DropDown };
