import * as React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { ButtonProperties } from '@blueeast/bluerain-ui-interfaces';

export interface MuiButtonProperties extends ButtonProperties {

    size?: 'small' | 'medium' | 'large';
    color?: any,
    fab?: boolean
}


export const BlueRainButton: React.StatelessComponent<MuiButtonProperties> = (props) => {
    const { fab, iconLeft, onPress, transparent, ...others } = props;



    return (
        <>
            {fab
                ?
                <Fab
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
                    onClick={onPress}
                    variant="extended"
                    size={props.small ? 'small' : props.large ? 'large' : props.size}>

                    {iconLeft ? iconLeft : null} {props.title ? props.title : null} {props.children}{props.iconRight ? props.iconRight : null}

                </Fab>
                :

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
            }
        </>
    );
};

