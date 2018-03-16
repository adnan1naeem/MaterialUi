
import { DialogContent } from 'material-ui/Dialog';
import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

const  ModalBody =(props:ModalBodyProperties) => {
  return(
    <DialogContent>
        {props.children}
    </DialogContent>

  );
};
export default ModalBody;