import Typography from '@material-ui/core/Typography';
import { TextProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

export interface MUITypographyProperties extends TextProperties {
  headlineMapping?: any
}
const Text: React.StatelessComponent<MUITypographyProperties> = (props) => {
  const { variant, ...others } = props;

  const variantType = variant ? variant : 'body1';
  return (<Typography variant={variantType} {...others} />);
};
export default Text;