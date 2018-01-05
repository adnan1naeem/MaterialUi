/**
 * Created by M.GhazanfarAli on 12/27/17.
 */

import * as React from 'react';
import IButton from 'bluerain-ui-interfaces/Components/Button';
import { Button } from 'material-ui';


const BlueRainButton = (props: IButton) => {
    const widthFull = {...props.style, width:'100%'};
    if(props.iconLeft){
    return (
        <Button
            raised={props.color==='link' ? false: true}
            color={props.color? (props.color==='default'|| props.color==='accent'|| props.color==='primary'|| props.color==='contrast'? props.color: 'default') : 'default'}
            style={props.fullWidth? widthFull: props.style}
            disabled={props.disabled}
            href={props.href}
            fab={props.fab}
            mini={props.small}
            onClick={props.onClick}
            dense={props.small}
        >
        {props.iconLeft} {props.children}
        </Button>
    );
    }
    else if(props.iconRight){
        return (
            <Button
                raised={props.color==='link' ? false: true}
                color={props.color? (props.color==='default'|| props.color==='accent'|| props.color==='primary'|| props.color==='contrast'? props.color: 'default') : 'default'}
                style={props.fullWidth? widthFull: props.style}
                disabled={props.disabled}
                href={props.href}
                fab={props.fab}
                mini={props.small}
                onClick={props.onClick}
                dense={props.small}
            >
            {props.children} {props.iconRight}
            </Button>
        );
        }
    return (
        <Button
            raised={props.color==='link' ? false: true}
            color={props.color? (props.color==='default'|| props.color==='accent'|| props.color==='primary'|| props.color==='contrast'? props.color: 'default') : 'default'}
            style={props.fullWidth? widthFull: props.style}
            disabled={props.disabled}
            href={props.href}
            fab={props.fab}
            mini={props.small}
            onClick={props.onClick}
            dense={props.small}
        >
        {props.children}
        </Button>
    );

};

export default BlueRainButton;