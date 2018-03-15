/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import { DialogContent,DialogContentText } from 'material-ui/Dialog';
import React, { Children, ReactNode } from 'react';

import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import Button from 'material-ui/Button';
import  DialogHeader from    './DialogHeader.Component';




class DialogBody extends React.Component<ModalBodyProperties> {
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
export default DialogBody;