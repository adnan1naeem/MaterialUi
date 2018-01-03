/**
 * Created by M.GhazanfarAli on 12/27/17.
 */

import * as React from 'react';
import IButton from '@blueeast/bluerain-ui-interfaces/Components/Button';
import { Button } from 'material-ui';


/**
 * The props of Button Component
 * @param {Node} props.children Label to be passed as child.
 * @param {Object} props.style style object for button's style.
 * @param {enum} props.color color prop of type enum. Default color is 'primary'.
 * @param {function} props.onClick callback function fired when button is pressed.
 * @param {boolean} props.disabled if true, renders a disabled button.
 * @param {string} props.href href prop to move to a link.
 * @param {boolean} props.fullWidth if true, button is generated with 100% width of the cnotainer.
 * @param {Node} props.iconLeft icon prop to show icon on the left side of label.
 * @param {Node} props.iconRight icon prop to show icon on the right side of label.
 * @param {boolean} props.fab if true, fab button is generated.
 * @param {boolean} props.small if true, small button is generated (small also works when fab is true).
 * @param {string} props.className string name of styling css class.
 */

 export interface ButtonMUI {
        color?: 'default' | 'accent' | 'primary' | 'contrast' | 'inherit',
        dense?: boolean,
        classes?: object,
        disableRipple?: boolean,
        disableFocusRipple?: boolean,
        component?: string | undefined,
        raised?: boolean,
 }

const BlueRainButton = (props: IButton & ButtonMUI) => {
    if(props.iconLeft){
    return (
        <Button
        raised={true || props.raised}
        color={ props.color ? (props.color ==='default'|| props.color ==='accent'|| props.color ==='primary'|| props.color ==='contrast'? props.color: 'default') : 'default'} 
        style={props.fullWidth ? (props.style, {width:'100%'}): props.style} 
        disabled={props.disabled}
        href={props.href}
        fab={props.fab}
        mini={props.small}
        dense={props.small}
        onClick={props.onClick}
        {...props}
        >
        {props.iconLeft} {props.children}
        </Button>
    );
    }
    else if(props.iconRight){
        return (
            <Button
            raised={true || props.raised}
            color={ props.color ? (props.color==='default'|| props.color==='accent'|| props.color==='primary'|| props.color==='contrast'? props.color: 'default') : 'default'} 
            style={props.fullWidth? (props.style, {width:'100%'}): props.style} 
            disabled={props.disabled}
            href={props.href}
            fab={props.fab}
            mini={props.small}
            dense={props.small}
            onClick={props.onClick}
            {...props}
            >
            {props.children} {props.iconRight}
            </Button>
        );
        }
    return (
        <Button
        raised={true || props.raised}
        color={ props.color? (props.color==='default'|| props.color==='accent'|| props.color==='primary'|| props.color==='contrast'? props.color: 'default') : 'default'} 
        style={props.fullWidth ? (props.style, {width:'100%'}): props.style} 
        disabled={props.disabled}
        href={props.href}
        fab={props.fab}
        mini={props.small}
        dense={props.small}
        onClick={props.onClick}
        {...props}
        >
        {props.children}
        </Button>
    );

}

export default BlueRainButton;