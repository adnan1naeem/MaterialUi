/**
 * Created by M.Ghaznfar on 3/3/18.
 */


import React, { ReactNode } from 'react';
import { CheckboxProperties } from '@blueeast/bluerain-ui-interfaces';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




export interface MUIProps extends CheckboxProperties {
  color?:'primary' |
  'secondary' |
  'default'
  type?: string,
  inputRef?: () => {},
  inputProps?: {},
  indeterminateIcon?: ReactNode,
  indeterminate?: boolean,
  id?: string,
  icon?: ReactNode,
  disableRipple?: boolean,
  classes?: object,
  checkedIcon?: ReactNode,
  label?: ReactNode,
}

const BlueRainCheckbox = (props:MUIProps) => {
  
    const { value, onPress,testID, ...others } = props;
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              {...others}
              onChange={onPress}
              value={testID}
              checked={value}
            />
          }
          label={props.label}
        />
      </FormGroup>
    );
  }



export default BlueRainCheckbox;