/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode,Component } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
import DialogBody from  './DialogBody.Component';
import   DialogFooter from './DialogFooter.Component';
import DialogHeader from  './DialogHeader.Component';
import { Button } from '../Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export interface States{

  open:boolean

}

export interface MUIModalProperties extends ModalProperties{
  classes?:object,
  disableBackdropClick?:boolean,
  disableEscapeKeyDown?:boolean,
  fullScreen?:boolean,
  fullWidth?:boolean,
  maxWidth?:'xs'|'sm'|'md'
  onBackdropClick?:()=>void,
  onClose?:()=>void,
  onEnter?:()=>void,
  onEntered?:()=>void,
  onEntering?:()=>void,
  onEscapeKeyDown?:()=>void,
  onExit?:()=>void,
  onExited?:()=>void,
  onExiting?:()=>void,
  open?:boolean,
  PaperProps?:object,
  transition?:'sting',
  transitionDuration?:'string'

}

class DialogComponent extends React.Component<MUIModalProperties,States > {
    constructor (props:any) {
      super(props);
      this.props=props;
      this.state = {
        open: false,
      };
      this.handleClose=this.handleClose.bind(this);
      this.handleClickOpen=this.handleClickOpen.bind(this);
    }

    handleClickOpen = () => {
      this.setState({ open: true });
    }

    handleClose = () => {
      this.setState({ open: false });
    }
  render(){

      return(
        <div>

        <Button
           onPress={this.handleClickOpen}
        >
       Open DIalog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth={this.props.fullWidth}
          fullScreen={this.props.fullScreen}

        >
          <DialogHeader>
          UserLocation Service
          </DialogHeader>

         <DialogBody>

         Let Google help apps determine location. This means sending anonymous location data to
         Google, even when no apps are running.
          </DialogBody>


          <DialogFooter>

          <Button onPress={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onPress={this.handleClose} color="primary" >
              Agree
            </Button>
            <Button onPress={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onPress={this.handleClose} color="primary" >
              Agree
            </Button>
          </DialogFooter>


        </Dialog>
      </div>
      );
    }
	}




export default DialogComponent;