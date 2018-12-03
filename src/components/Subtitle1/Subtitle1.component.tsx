import * as React from 'react';
import Typography  from '@material-ui/core/Typography';
import { TextProperties } from '@blueeast/bluerain-ui-interfaces';

const Subtitle1: React.StatelessComponent<TextProperties> = props => {
  const {style, ...others} = props;
  return (
    <Typography
      style={style}
      variant="subtitle1"
      {...others}
    />
  );
};
export default Subtitle1;
