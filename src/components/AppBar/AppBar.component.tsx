import * as React from 'react';
import { BlueRainType, withBlueRain } from '@blueeast/bluerain-os';
import { AppBarProp } from '@blueeast/bluerain-ui-interfaces';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

/**
 * The universal props of AppBar Component
 * @param {Object} props.style Get the style object.
 * @param {'inherit' | 'primary' | 'accent' | 'default' | undefined} props.color BackgroundColor for AppBar.
 * @param {Node} props.children children of AppBar.
 * @param {'static' | 'fixed' | 'absolute' | undefined} props.position position of AppBar.
 * @param {string} props.className className props to extend styles through CSS for AppBar.
 */


export interface MUIProps {
	color?: 'inherit' | 'primary' | 'accent' | 'default' | undefined,
	position?: 'static' | 'fixed' | 'absolute' | undefined,
}

const BlueRainAppBar = (props: AppBarProp & MUIProps) => {
	return	(
	<AppBar {...props}>
		<Toolbar>
			{props.children}
		</Toolbar>
	</AppBar>);

};

export default withBlueRain(BlueRainAppBar);
