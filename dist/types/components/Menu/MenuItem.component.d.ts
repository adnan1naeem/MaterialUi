/// <reference types="react" />
import React from 'react';
export interface MenuItemProperties {
    disabled?: boolean;
    value?: any;
    [key: string]: any;
}
declare const BRMenuItem: React.StatelessComponent<MenuItemProperties>;
export default BRMenuItem;
