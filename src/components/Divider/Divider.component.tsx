import * as React from 'react';
import { DividerProp } from '@blueeast/bluerain-ui-interfaces';
import Divider from 'material-ui/Divider';


/**
 * The universal props of Divider Component
 * @param {ReactNode} props.light If true, Divider is generated with light color.
 *  The specific libraray props of Divider Component
 * @param {ReactNode} props.component component to generate Divider with.
 * @param {ReactNode} props.inset if true, Divider is generated indented.
 */

export interface MUIProps {
	component?: React.ReactNode;
	inset?: boolean;
	absolute?: boolean;
	classes?: {};
}
const BlueRainDivider = (props: DividerProp & MUIProps) => {
	return (
        <Divider {...props} />
	);

};

export default BlueRainDivider;