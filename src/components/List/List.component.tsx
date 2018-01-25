/**
 * Created by M.GhazanfarAli on 15/01/18.
 */

import * as React from 'react';
import IList from 'bluerain-ui-interfaces/Components/List';
import { List } from 'material-ui';

/**
 * The props of List Component
 * @param {Node} props.children Children of List component.
 * @param {Object} props.style style object for List's style.
 */

 /**
  * Platform specific props
  * @param {string} props.className className to give css styling.
  * @param {Node} props.subheader subbheader of List.
  * @param {bool} props.disablePadding If true, padding is disabled.
  * @param {bool} props.dense if true, dense styling is used.
  */

export interface IBSProps {
	className?: string,
	subheader?: any,
	disablePadding?:boolean,
	dense?:boolean,
}

const BlueRainList = (props: IList & IBSProps) => {
	return (
        <List
            style={props.style}
            className={props.className}
        >
        {props.children}
        </List>
	);

};

export default BlueRainList;