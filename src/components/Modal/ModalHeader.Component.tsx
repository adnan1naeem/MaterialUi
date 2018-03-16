import React, { ReactNode } from 'react';
import { DialogTitle } from 'material-ui/Dialog';
import { ModalHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import Button from 'material-ui/Button';


class ModalHeader extends React.Component<ModalHeaderProperties> {
    constructor (props:ModalHeaderProperties) {
      super(props);
      this.props=props;
		}
  render(){
    return(<DialogTitle >{this.props.children}</DialogTitle>);
  }
}
export default ModalHeader;