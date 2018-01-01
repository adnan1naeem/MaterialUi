/**
 * Created by Ghazal Taimur on 12/29/17.
 */
import * as React from 'react';
import ChipUi from 'material-ui/Chip';
import { IChip } from '@blueeast/bluerain-ui-interfaces/Components/Chip';

/**
 * The props of Chip Component
 * @param {Object} props.style Get the style object
 * @param {ReactNode} props.children Content of the Chip
 */
export interface IChipProps {
    label?: string;
}
const Chip = (props: IChip & IChipProps) => {
    return (
        <ChipUi classes={{...props.style}} label={props.children} {...props}></ChipUi>);

};

export default Chip;