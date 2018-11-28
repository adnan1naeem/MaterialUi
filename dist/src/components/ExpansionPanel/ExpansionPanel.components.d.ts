import React from 'react';
export interface ExpansionPanelProps {
    children: React.ReactNode;
    title?: string;
    expandIcon?: React.ReactNode;
}
declare const ExpansionPanelComponent: React.StatelessComponent<ExpansionPanelProps>;
export default ExpansionPanelComponent;
