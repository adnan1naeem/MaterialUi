import * as React from 'react';
import Table from '@material-ui/core/Table';

export interface MUITableProperties {
  padding?: 'default' | 'checkbox' | 'dense' | 'none',
  component?: any,
  classes?: object,
  children?: React.ReactNode
}

const BluerainTable: React.StatelessComponent<MUITableProperties> = (props) => {
  const { children, ...other } = props;
  return (
    <Table {...other}>
      {props.children}</Table>
  );
};

export default BluerainTable;
