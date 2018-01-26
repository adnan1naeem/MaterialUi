/**
 * Created by Ghazal Taimur on 12/29/17.
 */
import React from 'react';
import ChipUi from 'material-ui/Chip';
import { IChip } from 'bluerain-ui-interfaces/Components/Chip';

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
export interface IChipProps {
    label?: string;
    onClick?: () => void;
    onDelete?: () => void;
    deleteIcon?: any;
}
const Chip = (props: IChip & IChipProps) =>
    (<ChipUi classes={{...props.style}} label={props.children} {...props}></ChipUi>);
export default Chip;