/// <reference types="react" />
import React from 'react';
export interface MenuItemProperties {
    disabled?: boolean;
    classes?: object;
    children: React.ReactNode;
    selected?: boolean;
    value?: string;
    onClick?: (event: any) => void;
}
declare const BRMenuItem: React.StatelessComponent<MenuItemProperties>;
export default BRMenuItem;
