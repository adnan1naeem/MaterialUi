import { DialogActions } from 'material-ui/Dialog';
import { ModalFooterProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

const  ModalFooter =(props:ModalFooterProperties) => {
  return(
    <DialogActions>
        {props.children}
    </DialogActions>
    );
  };
  export default ModalFooter;
