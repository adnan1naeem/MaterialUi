import * as React from 'react';
import TableFooter from '@material-ui/core/TableFooter';

export interface MUITableFooterProperties {
  component?: any,
  classes?: object,
  children?: React.ReactNode
}

const BluerainTableFooter: React.StatelessComponent<MUITableFooterProperties> = (props) => {
  const { children, ...other } = props;
  return (
    <TableFooter {...other}>
      {props.children}</TableFooter>
  );
};

export default BluerainTableFooter;
