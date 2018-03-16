import React, { ReactNode } from 'react';
import { Button } from '../Button';
import { DialogActions } from 'material-ui/Dialog';
import { ModalFooterProperties } from '@blueeast/bluerain-ui-interfaces';

class ModalFooter extends React.Component<ModalFooterProperties> {
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
export default ModalFooter;