import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import { DividerProperties } from '@blueeast/bluerain-ui-interfaces';


/**
 * The universal props of Divider Component
 * @param {ReactNode} props.light If true, Divider is generated with light color.
 *  The specific libraray props of Divider Component
 * @param {ReactNode} props.component component to generate Divider with.
 * @param {ReactNode} props.inset if true, Divider is generated indented.
 */

export interface MUIDividerProperties extends DividerProperties {
  inset?: boolean;
  absolute?: boolean;
  classes?: {};
  light?: boolean
}
const BlueRainDivider: React.StatelessComponent<MUIDividerProperties> = (props) => {
  return (
    <Divider {...props} />
  );
};

export default BlueRainDivider;
