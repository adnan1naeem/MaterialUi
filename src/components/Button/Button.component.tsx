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
 * @param {boolean} props.small if true and fab also true then small fab button is generated.
 */
const BlueRainButton = (props: IButton) => {
    if(props.iconLeft){
    return (
        <Button
        raised={props.color === 'link' ? false: true}
        color={ props.color ? (props.color ==='default'|| props.color ==='accent'|| props.color ==='primary'|| props.color ==='contrast'? props.color: 'default') : 'default'} 
        style={props.fullWidth ? (props.style, {width:'100%'}): props.style} 
        disabled={props.disabled}
        href={props.href}
        fab={props.fab}
        mini={props.small}
        onClick={props.onClick}
        >
        {props.iconLeft} {props.children}
        </Button>
    );
    }
    else if(props.iconRight){
        return (
            <Button
            raised={props.color==='link' ? false: true}
            color={ props.color ? (props.color==='default'|| props.color==='accent'|| props.color==='primary'|| props.color==='contrast'? props.color: 'default') : 'default'} 
            style={props.fullWidth? (props.style, {width:'100%'}): props.style} 
            disabled={props.disabled}
            href={props.href}
            fab={props.fab}
            mini={props.small}
            onClick={props.onClick}
            >
            {props.children} {props.iconRight}
            </Button>
        );
        }
    return (
        <Button
        raised={props.color==='link' ? false: true}
        color={ props.color? (props.color==='default'|| props.color==='accent'|| props.color==='primary'|| props.color==='contrast'? props.color: 'default') : 'default'} 
        style={props.fullWidth ? (props.style, {width:'100%'}): props.style} 
        disabled={props.disabled}
        href={props.href}
        fab={props.fab}
        mini={props.small}
        onClick={props.onClick}
        >
        {props.children}
        </Button>
    );

}

export default BlueRainButton;