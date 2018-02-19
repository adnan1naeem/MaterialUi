import { MenuItem } from 'material-ui/Menu';
import React from 'react';

export interface MUIDropDownItem {
	disabled?:boolean,
	value?:any
}
const DropdownItem = (props:MUIDropDownItem) => (<MenuItem {...props} />);

export default DropdownItem;
