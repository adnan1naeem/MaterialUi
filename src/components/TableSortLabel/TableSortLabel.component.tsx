import * as React from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';

export interface MUITableSortLabelProperties {
  classes?: object,
  children?: React.ReactNode
  active?: boolean;
  direction?: 'asc' | 'desc';
  hideSortIcon?: boolean;
  IconComponent?: any;
  onClick?:any

}

const BluerainTableSortLabel: React.StatelessComponent<MUITableSortLabelProperties> = (props) => {
  const { children, ...other } = props;
  return (
    <TableSortLabel {...other}>
      {props.children}</TableSortLabel>
  );
};

export default BluerainTableSortLabel;
