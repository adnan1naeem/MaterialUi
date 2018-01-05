/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ICardHeader } from 'bluerain-ui-interfaces/Components/Card';
import { CardHeader, CardContent } from 'material-ui/Card';

/**
 * The props of CardHeader Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.title Title of the CardHeader.
 * @param {string or function} props.tag tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */


 /**
  * Platform specific props
  * @param {Node} props.action The action to display in the card header.
  * @param {Node} props.avatar The Avatar for the Card Header.
  * @param {Object} props.classes Useful to extend the style applied to components.
  * @param {Node} props.subheader The content of the component.
  */

  export interface IMUIProps {
    action?: React.ReactNode,
    avatar?: React.ReactNode,
    classes?: {},
    subheader?: React.ReactNode,
    }

const BlueRainCardHeader = (props: ICardHeader & IMUIProps) => {
    return (
        <CardHeader
            style={props.style}
            title={props.title}
            component={typeof props.tag==='string'? props.tag : CardContent}
            subheader={props.children}
            {...props}
        >
        {props.children}
        </CardHeader>
    );

};

export default BlueRainCardHeader;