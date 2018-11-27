import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { TextProperties } from '@blueeast/bluerain-ui-interfaces';

const Caption: React.StatelessComponent<TextProperties> = props => {
  const { style, ...others } = props;
  return (
    <Typography style={style} variant="caption" {...others} />
  );
};

export default Caption;
