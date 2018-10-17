// import * as React from 'react';
// import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
// import { DrawerProperties } from '@blueeast/bluerain-ui-interfaces';
// import Drawer from 'material-ui/Drawer';

// /**
//  * An interface that extends the DrawerProperties interface
//  *
//  * @export MUIDrawerProperties
//  * @interface MUIDrawerProperties
//  * @extends {DrawerProperties}
//  */
// export interface MUIDrawerProperties extends DrawerProperties {
// 	PaperProps?: any,
// 	SlideProps?: any,
// 	ModalProps?: any,
// 	variant?: 'permanent' | 'persistent' | 'temporary',
// 	classes?: any
// }

// // export const BlueRainDrawer: React.StatelessComponent<MUIDrawerProperties> = (props) => (
// // 	<MUIDrawer children={props.content} {...props}/>
// // );

// export const MUIDrawer: React.StatelessComponent<MUIDrawerProperties & { children?: React.ReactNode }> = (props) => (
// 	<BlueRainConsumer>
// 		{
// 			(BR: BlueRain) => (
// 				<BR.Components.View>
// 					<Drawer
// 						anchor={props.side}
// 						transitionDuration={props.tweenDuration}
// 						type={props.variant}
// 						{...props}
// 					>
// 						{props.children}
// 					</Drawer>
// 				</BR.Components.View>
// 			)
// 		}
// 	</BlueRainConsumer>
// );
