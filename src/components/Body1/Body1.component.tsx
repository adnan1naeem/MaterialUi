import * as React from 'react';
import Typography from '@material-ui/core/Typography';
const Body1: React.StatelessComponent<{ style?: object }> = props => {
  const { style, ...others } = props;
  return (
    <Typography style={style} variant="body1" {...others} />
  );
};

export default Body1;
