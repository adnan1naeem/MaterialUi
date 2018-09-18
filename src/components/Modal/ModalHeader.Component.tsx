import { DialogTitle } from 'material-ui/Dialog';
import { ModalHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

const ModalHeader: React.StatelessComponent<ModalHeaderProperties> = (props) => {

  return(
      <DialogTitle>
        {props.children}
      </DialogTitle>
    );
  };
export default ModalHeader as React.ComponentType<any>;
