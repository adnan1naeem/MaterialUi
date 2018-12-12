import * as React from 'react';
export interface TabProps {
    disabled?: boolean;
    fullWidth?: boolean;
    icon?: string | React.ReactElement<any>;
    value?: any;
    label?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<{
        checked: boolean;
    }>, value: any) => void;
    onClick?: React.EventHandler<any>;
    selected?: boolean;
    style?: React.CSSProperties;
    textColor?: string | 'secondary' | 'primary' | 'inherit';
}
declare const BluerainTab: React.StatelessComponent<TabProps>;
export default BluerainTab;
