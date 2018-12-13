import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';

export interface MUITableCellProperties {
  component?: any,
  classes?: object,
  children?: React.ReactNode,
  numeric?: boolean,
  padding?: 'default' | 'checkbox' | 'dense' | 'none',
  scope?: string,
  sortDirection?: false |'asc' | 'desc' ,
  variant?: 'head' | 'body' | 'footer',
  colSpan?:number,
}

const BluerainTableCell: React.StatelessComponent<MUITableCellProperties> = (props) => {
  const { children, ...other } = props;
  return (
    <TableCell {...other}>
      {props.children}</TableCell>
  );
};

export default BluerainTableCell;
