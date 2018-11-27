import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { TextProperties } from '@blueeast/bluerain-ui-interfaces';

const Body2: React.StatelessComponent<TextProperties> = props => {
  const { style, ...others } = props;
  return (
    <Typography style={style} variant="body2" {...others} />
  );
};

export default Body2;
