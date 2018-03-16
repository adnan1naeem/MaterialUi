
import { DialogContent,DialogContentText } from 'material-ui/Dialog';
import React, { Children, ReactNode } from 'react';
import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import Button from 'material-ui/Button';

class ModalBody extends React.Component<ModalBodyProperties> {
    constructor (props:any) {
      super(props);
      this.props=props;
		}
    render(){
      return(
        <DialogContent>
        {this.props.children}
        </DialogContent>
      );
  }
}
export default ModalBody;