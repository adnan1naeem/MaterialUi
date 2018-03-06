/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import { FormControlLabel, FormGroup } from 'material-ui/Form';
import React, { ReactNode } from 'react';
import { CheckboxProperties } from '@blueeast/bluerain-ui-interfaces';
import Checkbox from 'material-ui/Checkbox';

export interface MUIProps extends CheckboxProperties{
  color?: 'default' | 'inherit' | 'primary' | 'accent' | 'contrast' | undefined,
  type?: string,
  onChange?: () => {},
  inputRef?: () => {},
  inputProps?: {},
  indeterminateIcon?: ReactNode,
  indeterminate?: boolean,
  id?: string,
  icon?: ReactNode,
  disableRipple?: boolean,
  classes?: {},
  checkedIcon?: ReactNode,
  }

class BlueRainCheckbox extends React.Component<MUIProps, {checked:boolean | string}> {
    constructor (props:MUIProps) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state= {
        checked: props.value? props.value : false,
		};
	}

  handleChange = name => event => {
    this.props.onChange? this.props.onChange() : this.setState({ [name]: event.target.checked });
    this.setState({ [name]: event.target.checked });
  }

  render() {
const {value, ...others} = this.props;
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              {...others}
              onChange={this.handleChange('checked')}
              value={this.props.testID}
              checked={this.state.checked}
            />
          }
          label={this.props.label}
        />
      </FormGroup>
    );
  }
}


export default BlueRainCheckbox;