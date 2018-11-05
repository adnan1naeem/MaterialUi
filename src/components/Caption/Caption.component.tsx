import * as React from 'react';
import Typography  from '@material-ui/core/Typography';
import { TextProperties } from '@blueeast/bluerain-ui-interfaces';

const Caption: React.StatelessComponent<TextProperties> = props => {
  return (
    <Typography style={props.style} variant="caption" />
  );
};

export default Caption;
