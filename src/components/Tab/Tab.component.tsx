import * as React from 'react';
import Tab from '@material-ui/core/Tab';

export interface TabProps {
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string | React.ReactElement<any>;
  value?: any;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{ checked: boolean }>, value: any) => void;
  onClick?: React.EventHandler<any>;
  selected?: boolean;
  style?: React.CSSProperties;
  textColor?: string | 'secondary' | 'primary' | 'inherit';
}

const BluerainTab: React.StatelessComponent<TabProps> = (props) => {
  return (
    <Tab  {...props}/>
  );
};

export default BluerainTab;
