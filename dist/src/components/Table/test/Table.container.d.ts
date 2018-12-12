import React from 'react';
export interface EnhancedTableHeadProps {
    numSelected: number;
    onRequestSort: any;
    onSelectAllClick: any;
    order: 'asc' | 'desc';
    orderBy: string;
    rowCount: number;
}
export interface TableStates {
    order?: any;
    orderBy?: any;
    selected: any;
    data?: any;
    page?: number;
    rowsPerPage: number;
}
declare class EnhancedTable extends React.Component<any, TableStates> {
    constructor(props: any);
    handleRequestSort: (event: any, property: any) => void;
    handleSelectAllClick: (event: any) => void;
    handleClick: (event: any, id: number) => void;
    handleChangePage: (event: any, page: any) => void;
    handleChangeRowsPerPage: (event: any) => void;
    isSelected: (id: any) => boolean;
    render(): JSX.Element;
}
export default EnhancedTable;
