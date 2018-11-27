import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { TextProperties } from '@blueeast/bluerain-ui-interfaces';

const Overline: React.StatelessComponent<TextProperties> = props => {
  const { style, ...others } = props;
  return (
    <Typography
      style={style}
      variant="overline"
      {...others}
    />
  );
};

export default Overline;
