import * as React from 'react';
export interface MUITableRowProperties {
    component?: any;
    classes?: object;
    children?: React.ReactNode;
    hover?: boolean;
    selected?: boolean;
    onClick?: any;
    role?: any;
    tabIndex?: any;
    style?: any;
}
declare const BluerainTableRow: React.StatelessComponent<MUITableRowProperties>;
export default BluerainTableRow;
