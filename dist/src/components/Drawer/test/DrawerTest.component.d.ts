import { MUIDrawerProperties } from '../Drawer.component';
import React from 'react';
export declare class DrawerTest extends React.Component<MUIDrawerProperties, {
    open?: boolean;
}> {
    side: any;
    constructor(props: MUIDrawerProperties);
    onClose(): void;
    render(): JSX.Element;
}
export default DrawerTest;
