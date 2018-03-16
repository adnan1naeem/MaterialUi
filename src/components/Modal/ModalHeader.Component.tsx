import { DialogActions } from 'material-ui/Dialog';
import { ModalHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
const  ModalHeader =(props:ModalHeaderProperties) => {
  return(
      <DialogActions>
        {props.children}
      </DialogActions>
    );
  };
export default ModalHeader;
