/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode } from 'react';
import { ModalFooterProperties } from '@blueeast/bluerain-ui-interfaces';
import { Button } from '../Button';
import { DialogActions, } from 'material-ui/Dialog';




class DialogHeader extends React.Component<ModalFooterProperties> {
    constructor (props:any) {
      super(props);
      this.props=props;
		}


  render(){

return(
<DialogActions>
   {this.props.children}
</DialogActions>
);

}}
export default DialogHeader;