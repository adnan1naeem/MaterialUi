import * as React from 'react';
export interface MUITableProperties {
    padding?: 'default' | 'checkbox' | 'dense' | 'none';
    component?: any;
    classes?: object;
    children?: React.ReactNode;
}
declare const BluerainTable: React.StatelessComponent<MUITableProperties>;
export default BluerainTable;
