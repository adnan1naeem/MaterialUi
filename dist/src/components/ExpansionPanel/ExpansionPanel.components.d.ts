import React from 'react';
export interface ExpansionPanelProps {
    children: React.ReactNode;
    title?: string;
    expandIcon?: React.ReactNode;
    collapsed?: boolean;
    onChange?: () => void;
    styles?: object;
    defaultExpanded?: boolean;
}
declare const ExpansionPanelComponent: React.StatelessComponent<ExpansionPanelProps>;
export default ExpansionPanelComponent;
