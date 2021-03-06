
import * as React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export interface TablePaginationProps {
  count: number;
  labelDisplayedRows?:any;
  labelRowsPerPage?: React.ReactNode;
  nextIconButtonProps?: any;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  onChangeRowsPerPage?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  page: number;
  rowsPerPage: number;
  ActionsComponent?: any;
  backIconButtonProps?: any;
  component?: any;
  rowsPerPageOptions?: number[];
  SelectProps?: any;
}

const BluerainTablePagination: React.StatelessComponent<TablePaginationProps> = (props) => {

  return (
    <TablePagination  {...props} />
  );
};

export default BluerainTablePagination;
