
import React, { ReactNode } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
import Dialog from 'material-ui/Dialog';

export interface MUIModalProperties extends ModalProperties {
  fullScreen?: boolean,
  fullWidth?: boolean,
  maxWidth?: 'xs' | 'sm' | 'md'
  onClose: () => void,
  visible: boolean,
  children: ReactNode
}
const Modal = (props: MUIModalProperties) => {
  return (
    <Dialog
      open={props.visible}
      onClose={props.handleClose}
      onEscapeKeyDown={props.onRequestClose}
      {...props}
    >
      {props.children}
    </Dialog>
  );
};
export default Modal as React.ComponentType<any>;