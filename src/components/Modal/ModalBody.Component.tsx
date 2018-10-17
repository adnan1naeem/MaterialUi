
import DialogContent from '@material-ui/core/DialogContent';
import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

const ModalBody: React.StatelessComponent<ModalBodyProperties> = (props) => {
  return (
    <DialogContent {...props}>
      {props.children}
    </DialogContent>
  );
};
export default ModalBody as React.ComponentType<any>;
