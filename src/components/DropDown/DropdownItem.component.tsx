import { MenuItem } from 'material-ui/Menu';
import React,{Children} from 'react';

export interface MUIDropdownItem {
	disabled?:boolean,
	value?:any,
	children?:any
}
const DropdownItem: React.StatelessComponent<MUIDropdownItem> = (props) => (
	<MenuItem value={props.value} {...props}/>	
);

export default DropdownItem;
