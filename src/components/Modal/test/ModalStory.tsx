import { Button } from '../../Button';
import Modal from '../Modal.Component';
import ModalBody from '../ModalBody.Component';
import ModalFooter from '../ModalFooter.Component';
import ModalHeader from '../ModalHeader.Component';
import React from 'react';

export interface States{
  open:boolean;
}
export interface Props {
  onClose?: ()=> void;
  fullWidth?: boolean;
  fullScreen?: boolean;
}

class ModalStoryComponent extends React.Component<Props,States > {
    constructor (props:any) {
      super(props);
      // this.props=props;
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
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth={this.props.fullWidth}
          fullScreen={this.props.fullScreen}
        >
          <ModalHeader>
          UserLocation Service
          </ModalHeader>
          <ModalBody>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </ModalBody>
          <ModalFooter>

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
          </ModalFooter>
        </Modal>
      </div>
      );
    }
	}
export default ModalStoryComponent;
