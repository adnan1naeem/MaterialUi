import * as React from 'react';
import { ButtonProperties } from '@blueeast/bluerain-ui-interfaces';
import Button from '@material-ui/core/Button';;

export interface MuiButtonProperties extends ButtonProperties {

  size:'small' |'medium' |'large',

}

export const BlueRainButton : React.StatelessComponent<ButtonProperties> = (props) => {	
		return (
            <Button
                color={props.color}
                style={props.style}
                disabled={props.disabled}
                href={props.href}
                mini={props.small}
                onClick={props.onPress}
                fullWidth={props.fullWidth}  
                variant={props.rounded?'fab':props.bordered?'outlined':props.variant}
                size={props.small?'small':props.large?'large':props.size}
            >
            {props.iconLeft?props.iconLeft:null}{props.title?props.title:null}{props.children}{props.iconRight?props.iconRight:null}
            </Button>
		);
};

