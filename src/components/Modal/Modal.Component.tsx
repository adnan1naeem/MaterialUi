
import React, { ReactNode } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
import Dialog from '@material-ui/core/Dialog';

export interface MUIModalProperties extends ModalProperties {
  fullScreen?: boolean,
  fullWidth?: boolean,
  maxWidth?: 'xs' | 'sm' | 'md'
  onClose: () => void,
  visible: boolean,
  disableBackdropClick?: boolean,
  disableEscapeKeyDown?: boolean,
  onBackdropClick?: () => void,
  onEnter?: () => void,
  onEntered?: () => void,
  onEntering?: () => void,
  onEscapeKeyDown?: () => void,
  onExit?: () => void,
  onExited?: () => void,
  onExiting?: () => void,
  open?: boolean,
  PaperProps?: object,
  scroll?: 'body' | 'paper',
  TransitionComponent?: string
  transitionDuration?: { enter?: number, exit?: number },
  TransitionProps?: object,
  children: ReactNode;
}
const Modal = (props: MUIModalProperties) => {
  return (
    <Dialog
      open={props.visible}
      onClose={props.handleClose}
      onEscapeKeyDown={props.onRequestClose}
      // TransitionComponent={props.direction ? () => <Slide direction={props.direction} /> : ''}
      {...props}

    >
      {props.children}
    </Dialog>
  );
};
export default Modal as React.ComponentType<any>;