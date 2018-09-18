import { DialogActions } from 'material-ui/Dialog';
import { ModalFooterProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

const ModalFooter: React.StatelessComponent<ModalFooterProperties> = (props) => {

  return(
    <DialogActions>
        {props.children}
    </DialogActions>
    );
  };
  export default ModalFooter as React.ComponentType<any>;
