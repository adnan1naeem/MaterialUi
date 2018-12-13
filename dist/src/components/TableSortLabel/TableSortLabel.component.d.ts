import * as React from 'react';
export interface MUITableSortLabelProperties {
    classes?: object;
    children?: React.ReactNode;
    active?: boolean;
    direction?: 'asc' | 'desc';
    hideSortIcon?: boolean;
    IconComponent?: any;
    onClick?: any;
}
declare const BluerainTableSortLabel: React.StatelessComponent<MUITableSortLabelProperties>;
export default BluerainTableSortLabel;
