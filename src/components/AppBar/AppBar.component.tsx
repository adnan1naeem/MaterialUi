import * as React from 'react';
import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
import { AppBarProperties } from '@blueeast/bluerain-ui-interfaces';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

/**
 * An interface that extends the AppBarProperties interface
 *
 * @export MUIAppBarProperties
 * @interface MUIAppBarProperties
 * @extends {AppBarProperties}
 */
export interface MUIAppBarProperties extends AppBarProperties {
	color?: 'inherit' | 'primary' | 'accent' | 'default' | undefined,
	position?: 'static' | 'fixed' | 'absolute' | undefined
}

export const BlueRainAppBar: React.StatelessComponent<MUIAppBarProperties> = (props) => (
	<BlueRainConsumer>
	{(BR: BlueRain) => (
		<AppBar {...props} style={props.style ? props.style : { position: 'sticky' }}>
			<Toolbar>
				{props.children}
			</Toolbar>
		</AppBar>
	)}
	</BlueRainConsumer>
);
