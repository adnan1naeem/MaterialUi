/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode,Component,Children } from 'react';
import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import Button from 'material-ui/Button';
import { DialogContent,DialogContentText } from 'material-ui/Dialog';
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
}}
export default DialogBody;