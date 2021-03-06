import React, { ReactNode } from 'react';
import Select from '@material-ui/core/Select';
import { PickerProperties } from '@blueeast/bluerain-ui-interfaces';
// import { MenuItem } from 'material-ui/Menu';

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
export interface MUIPickerProperties extends PickerProperties {
  autoWidth?: boolean,
  classes?: object,
  displayEmpty?: boolean,
  input?: ReactNode,
  MenuProps?: object,
  native?: boolean,
  renderValue?: any,
  value?: any,
  onChange?: any,
  inputprops?: object,
  disabled?: boolean,
  onOpen?: (event: object) => void
  open?: boolean,
  SelectDisplayProps?: object,
  variant?: 'standard' | 'outlined' | 'filled'

}

const DropDown: React.StatelessComponent<MUIPickerProperties> = (props) => (
  <Select
    onChange={props.onValueChange}
    value={props.selectedValue}
    onSelect={props.selectedValue}
    {...props}
  />
);

export default DropDown;
