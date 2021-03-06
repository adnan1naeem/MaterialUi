import * as React from 'react';
import ChipUi from '@material-ui/core/Chip';
import { ChipProperties } from '@blueeast/bluerain-ui-interfaces';

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
export interface ChipMUIProperties extends ChipProperties {
  component?: React.ReactType<any> | any;
}

const Chip: React.StatelessComponent<ChipMUIProperties> = (props) => (
  <ChipUi
  {...props}
  classes={{ ...props.style }}
  />
);
export default Chip;
export { ChipProperties };

