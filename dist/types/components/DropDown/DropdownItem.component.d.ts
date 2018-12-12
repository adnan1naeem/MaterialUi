/// <reference types="react" />
import React from 'react';
export interface MUIDropdownItem {
    disabled?: boolean;
    value?: any;
    children?: any;
}
declare const DropdownItem: React.StatelessComponent<MUIDropdownItem>;
export default DropdownItem;
