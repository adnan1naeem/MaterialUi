import * as React from 'react';
import TableBody from '@material-ui/core/TableBody';

export interface MUITableBodyProperties {
  component?: any,
  classes?: object,
  children?: React.ReactNode
}

const BluerainTableBody: React.StatelessComponent<MUITableBodyProperties> = (props) => {
  const { children, ...other } = props;
  return (
    <TableBody {...other}>
      {props.children}</TableBody>
  );
};

export default BluerainTableBody;
