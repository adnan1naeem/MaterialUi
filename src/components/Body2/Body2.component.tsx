import * as React from 'react';
import Typography  from '@material-ui/core/Typography';
import { TextProperties } from '@blueeast/bluerain-ui-interfaces';

const Body2: React.StatelessComponent<TextProperties> = props => {
  return (
    <Typography style={props.style} variant="body2" />
  );
};

export default Body2;
