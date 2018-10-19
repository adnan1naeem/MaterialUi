import * as React from 'react';
import { style } from './style';
import BR from '@blueeast/bluerain-os';

const Caption:React.StatelessComponent<{style?: object}> = props => {
  return (
        <BR.Components.Text style={{ ...style, ...props.style }}>{props.children}</BR.Components.Text>
  );
};

export default Caption;
