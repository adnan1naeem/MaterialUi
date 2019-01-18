import React from 'react';
export interface ExpansionPanelProps {
    children: React.ReactNode;
    title?: string;
    expandIcon?: React.ReactNode;
    collapsed?: boolean;
    onChange?: () => void;
    styles?: object;
    defaultExpanded?: boolean;
    detailStyle?: object;
    summeryStyle?: object;
}
declare const ExpansionPanelComponent: React.StatelessComponent<ExpansionPanelProps>;
export default ExpansionPanelComponent;
