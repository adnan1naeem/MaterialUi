
import DialogContentText from '@material-ui/core/DialogContentText';
import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

const ModalBodyText: React.StatelessComponent<ModalBodyProperties> = (props) => {
  return (
    <DialogContentText {...props}>
      {props.children}
    </DialogContentText>
  );
};
export default ModalBodyText as React.ComponentType<any>;
