import * as React from 'react';
export interface MUITableCellProperties {
    component?: any;
    classes?: object;
    children?: React.ReactNode;
    numeric?: boolean;
    padding?: 'default' | 'checkbox' | 'dense' | 'none';
    scope?: string;
    sortDirection?: false | 'asc' | 'desc';
    variant?: 'head' | 'body' | 'footer';
    colSpan?: number;
}
declare const BluerainTableCell: React.StatelessComponent<MUITableCellProperties>;
export default BluerainTableCell;
