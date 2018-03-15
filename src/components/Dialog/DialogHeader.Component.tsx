/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode } from 'react';
import { ModalHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import Button from 'material-ui/Button';
import { DialogTitle } from 'material-ui/Dialog';


class DialogHeader extends React.Component<ModalHeaderProperties> {
    constructor (props:ModalHeaderProperties) {
      super(props);
      this.props=props;
		}


  render(){

return(<DialogTitle >{this.props.children}</DialogTitle>);
}}
export default DialogHeader;