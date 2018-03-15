/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode,Component } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
import Dialog from 'material-ui/Dialog';


export interface MUIModalProperties extends ModalProperties{
  classes?:object,
  disableBackdropClick?:boolean,
  disableEscapeKeyDown?:boolean,
  fullScreen?:boolean,
  fullWidth?:boolean,
  maxWidth?:'xs'|'sm'|'md'
  onBackdropClick?:()=>void,
  onClose:()=>void,
  onEnter?:()=>void,
  onEntered?:()=>void,
  onEntering?:()=>void,
  onEscapeKeyDown?:()=>void,
  onExit?:()=>void,
  onExited?:()=>void,
  onExiting?:()=>void,
  open:boolean,
  PaperProps?:object,
  transition?:'sting',
  transitionDuration?:'string'

}

class DialogComponent extends React.Component<MUIModalProperties > {

  render(){

      return(

        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          fullWidth={this.props.fullWidth}
          fullScreen={this.props.fullScreen}
        >
          {this.props.children}
        </Dialog>

      );
    }
	}




export default DialogComponent;