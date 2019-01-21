import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { DrawerProperties } from '@blueeast/bluerain-ui-interfaces';
import { withStyles } from '@material-ui/core/styles';

/**
 * An interface that extends the DrawerProperties interface
 *
 * @export MUIDrawerProperties
 * @interface MUIDrawerProperties
 * @extends {DrawerProperties}
 */
export interface MUIDrawerProperties extends DrawerProperties {
	PaperProps?: object,
	SlideProps?: object,
	ModalProps?: object,
	variant?: 'permanent' | 'persistent' | 'temporary',
	classes?: any,
	elevation?: number,
}

// export const BlueRainDrawer: React.StatelessComponent<MUIDrawerProperties> = (props) => (
// 	<MUIDrawer children={props.content} {...props}/>
// );
const styles = (theme: any) => ({
	paparBorder: {
		border: 0,
	}
});
const MUIDrawer = (props: MUIDrawerProperties & { children?: React.ReactNode }) => {
	const { side, tweenDuration, variant, ...others } = props;
	console.log('drawer',props);
	return (
		<Drawer
			{...others}
			anchor={side}
			classes={{ paperAnchorDockedLeft: props.classes.paparBorder,
				paperAnchorDockedRight: props.classes.paparBorder,
				paperAnchorDockedTop: props.classes.paparBorder,
				paperAnchorDockedBottom: props.classes.paparBorder }}
			transitionDuration={tweenDuration}
			variant={variant}
		>
			{props.children}
		</Drawer>

	);
};

export default withStyles(styles)(MUIDrawer) as React.StatelessComponent<any>;

