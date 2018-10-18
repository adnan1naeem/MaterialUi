import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DrawerProperties } from '@blueeast/bluerain-ui-interfaces';
import Drawer from '@material-ui/core/Drawer';

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
const MUIDrawer: React.StatelessComponent<MUIDrawerProperties & { children?: React.ReactNode }> = (props) => {
	const { side, tweenDuration, variant, ...others } = props;
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

export default withStyles(styles)(MUIDrawer);

