import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { TextProperties } from '@blueeast/bluerain-ui-interfaces';

const H1: React.StatelessComponent<TextProperties> = props => {
  const { style, ...others } = props;
  return (
    <Typography
      style={style}
      variant="h1"
      {...others}
    />
  );
};

export default H1;
