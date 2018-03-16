
import React, { Component, ReactNode } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
import Dialog from 'material-ui/Dialog';
export interface MUIModalProperties extends ModalProperties{
  fullScreen?:boolean,
  fullWidth?:boolean,
  maxWidth?:'xs'|'sm'|'md'
  onClose:()=>void,
  open:boolean,
  children:ReactNode
}
const  ModalComponent =(props:MUIModalProperties) => {
    return(
        <Dialog
          onEscapeKeyDown={props.onRequestClose}
          {...props}
        >
          {props.children}
        </Dialog>

      );
    };
export default ModalComponent;