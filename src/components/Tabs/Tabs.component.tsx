import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';

export interface TabIndicatorProps {
  color: 'secondary' | 'primary' | string;
  style: { left: number; width: number };
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

const BluerainTabs: React.StatelessComponent<TabsProps> = (props) => {
  const { children, ...other } = props;
  return (
    <Tabs  {...other}>
      {props.children}</Tabs>
  );
};

export default BluerainTabs;
