import React, { Component, ReactNode } from 'react';
import { Button } from '../Button';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
import  Dialog from   './Dialog.Component';
import DialogBody from  './DialogBody.Component';
import   DialogFooter from './DialogFooter.Component';
import DialogHeader from  './DialogHeader.Component';


export interface States{
  open:boolean;

}

export interface Props {
  onClose?: ()=> void;
  fullWidth?: boolean;
  fullScreen?: boolean;

  }
class DialogStoryComponent extends React.Component<Props,States > {
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
       Open Dialog
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




export default DialogStoryComponent;