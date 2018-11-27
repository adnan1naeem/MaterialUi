import DialogTitle from '@material-ui/core/DialogTitle';
import { ModalHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

export interface ModalHeaderProps extends ModalHeaderProperties {
  disableTypography?: boolean

}

const ModalHeader: React.StatelessComponent<ModalHeaderProps> = (props) => {

  return (
    <DialogTitle {...props}>
      {props.children}
    </DialogTitle>
  );
};
export default ModalHeader as React.ComponentType<any>;
