import * as React from 'react';
export interface TabIndicatorProps {
    color: 'secondary' | 'primary' | string;
    style: {
        left: number;
        width: number;
    };
}
export interface TabsProps {
    action?: () => void;
    centered?: boolean;
    children?: React.ReactNode;
    component?: any;
    fullWidth?: boolean;
    indicatorColor?: 'secondary' | 'primary' | string;
    onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
    scrollable?: boolean;
    ScrollButtonComponent?: React.ReactType;
    scrollButtons?: 'auto' | 'on' | 'off';
    TabIndicatorProps?: Partial<TabIndicatorProps>;
    textColor?: 'secondary' | 'primary' | 'inherit' | string;
    value: any;
    width?: string;
}
declare const BluerainTabs: React.StatelessComponent<TabsProps>;
export default BluerainTabs;
