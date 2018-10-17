import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export interface MUIDropdownItem {
  disabled?: boolean,
  value?: any,
  children?: any
}
const DropdownItem: React.StatelessComponent<MUIDropdownItem> = (props) => (
  <MenuItem value={props.value} {...props} />
);

export default DropdownItem;
