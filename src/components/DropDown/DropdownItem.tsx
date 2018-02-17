import { MenuItem } from 'material-ui/Menu';
import React from 'react';

export interface IMaterialuiDropDownItem {
	disabled?:boolean,
	value?:any
}

const DropdownItem = (props:IMaterialuiDropDownItem) => (<MenuItem {...props} />);

export default DropdownItem;