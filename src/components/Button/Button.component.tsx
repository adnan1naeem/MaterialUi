import * as React from 'react';
import { ButtonProperties } from '@blueeast/bluerain-ui-interfaces';
import Button from '@material-ui/core/Button';

export interface MuiButtonProperties extends ButtonProperties {

  size?: 'small' | 'medium' | 'large';
  color?: any
}

export const BlueRainButton: React.StatelessComponent<MuiButtonProperties> = (props) => {
  const { iconLeft, onPress, transparent, ...others } = props;
  return (
    <Button
      {...others}
      color={props.primary ? 'primary' : props.color}
      style={props.success
        ?
        { backgroundColor: 'green', ...props.style } : props.dark
          ?
          { backgroundColor: 'black', ...props.style } : props.warning
            ?
            { backgroundColor: 'yellow', ...props.style } : props.danger
              ?
              { backgroundColor: 'red', ...props.style } : props.style}
      disabled={props.disabled}
      href={props.href}
      mini={props.small}
      onClick={onPress}
      fullWidth={props.fullWidth}
      variant={props.rounded ? 'fab' : props.bordered ? 'outlined' : props.primary || props.light ? 'contained' : props.variant}
      size={props.small ? 'small' : props.large ? 'large' : props.size}
    >
      {iconLeft ? iconLeft : null} {props.title ? props.title : null} {props.children}{props.iconRight ? props.iconRight : null}
    </Button>
  );
};

