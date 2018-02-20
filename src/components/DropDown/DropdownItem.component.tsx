import { MenuItem } from 'material-ui/Menu';
import React from 'react';

export interface MUIDropdownItem {
	disabled?:boolean,
	value?:any
}
const DropdownItem: React.StatelessComponent<MUIDropdownItem> = (props) => (<MenuItem {...props} />);

export default DropdownItem;
