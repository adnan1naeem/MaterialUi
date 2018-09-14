import React from 'react';
export interface MenuPopperProperties {
    menuListProps?: any;
    paperProps?: any;
    menuItems?: any;
    placement?: 'right' | 'right-end' | 'right-start' | 'left' | 'left-end' | 'left-start' | 'top' | 'top-end' | 'top-start' | 'bottom' | 'bottom-end' | 'bottom-start';
    component?: (props: any) => (React.ReactNode);
    style?: any;
}
declare class MenuPopper extends React.Component<MenuPopperProperties, {
    anchorEl: object;
}> {
    target1: any;
    state: {
        anchorEl: {};
    };
    handleOpen: (event: any) => void;
    handleClose: (event: any, onClick?: () => void) => void;
    render(): JSX.Element;
}
export default MenuPopper;
