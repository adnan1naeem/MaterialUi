/**
 * Created by Ghazal Taimur on 12/29/17.
 */
import * as React from 'react';
import { ChipProp } from '@blueeast/bluerain-ui-interfaces';
import ChipUi from 'material-ui/Chip';

/**
 * The universal props of Chip Component
 * @param {Object} props.style Get the style object
 * @param {ReactNode} props.children Content of the Chip
 * The specific library props of Chip Component
 * @param {string} props.label The content of the label.
 * @param {ReactNode} props.onDelete Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
 * @param {ReactNode} props.deleteIcon Custom delete icon element. Will be shown only if onDelete is set.
 * @param {ReactNode} props.onClick Function when clicked on chip.
 */
export interface MUIChipProps {
	label?: string;
	onClick?: () => void;
	onDelete?: () => void;
	deleteIcon?: any;
}
const Chip: React.StatelessComponent = (props: ChipProp & MUIChipProps) =>
    (<ChipUi classes={{ ...props.style }} label={props.children} {...props}></ChipUi>);
export default Chip;