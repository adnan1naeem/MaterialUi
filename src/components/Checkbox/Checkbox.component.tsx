/**
 * Created by M.Ghaznfar on 3/3/18.
 */

// import { FormControlLabel, FormGroup } from 'material-ui/Form';
import React, { ReactNode } from 'react';
import { CheckboxProperties } from '@blueeast/bluerain-ui-interfaces';
import Checkbox from 'material-ui/Checkbox';
import { MuiThemeProvider } from 'material-ui';

export interface MUIProps extends CheckboxProperties {
  color?: 'default' | 'inherit' | 'primary' | 'accent' | 'contrast' | undefined,
  type?: string,
  onChange?: (e: any) => {},
  inputRef?: () => {},
  inputProps?: {},
  indeterminateIcon?: ReactNode,
  indeterminate?: boolean,
  id?: string,
  icon?: ReactNode,
  disableRipple?: boolean,
  classes?: {},
  checkedIcon?: ReactNode,
  label?: ReactNode,
}

const BlueRainCheckbox = (props:MUIProps) => {

    return (
            <Checkbox
              {...props}
              onChange={props.onPress}
              value={props.testID}
              checked={props.value}
            />
    );
};

export default BlueRainCheckbox;