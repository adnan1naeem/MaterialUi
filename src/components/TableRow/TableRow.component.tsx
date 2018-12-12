import * as React from 'react';
import TableRow from '@material-ui/core/TableRow';

export interface MUITableRowProperties {
  component?: any,
  classes?: object,
  children?: React.ReactNode
  hover?: boolean,
  selected?: boolean,
  onClick?:any,
  role?:any,
  tabIndex?:any,
  style?:any
}

const BluerainTableRow: React.StatelessComponent<MUITableRowProperties> = (props) => {
  const { children, ...other } = props;
  return (
    <TableRow {...other}>
      {props.children}</TableRow>
  );
};

export default BluerainTableRow;