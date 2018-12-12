import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';

export interface MUITableHeadProperties {
  component?: any,
  classes?: object,
  children?: React.ReactNode
}

const BluerainTableHead: React.StatelessComponent<MUITableHeadProperties> = (props) => {
  const { children, ...other } = props;
  return (
    <TableHead {...other}>
      {props.children}</TableHead>
  );
};

export default BluerainTableHead;
