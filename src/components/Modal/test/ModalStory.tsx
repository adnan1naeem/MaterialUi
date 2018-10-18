import Button from '@material-ui/core/Button';
import Modal from '../Modal.Component';
import ModalBody from '../ModalBody.Component';
import ModalFooter from '../ModalFooter.Component';
import ModalHeader from '../ModalHeader.Component';
import ModalBodyText from '../ModalBodyText.component';

import React from 'react';

export interface States {
  open: boolean;
}
export interface Props {
  fullScreen?: boolean,
  fullWidth?: boolean,
  maxWidth?: 'xs' | 'sm' | 'md'
  onClose?: () => void,
  visible?: boolean,
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
}

class ModalStoryComponent extends React.Component<Props, States> {
  constructor(props: any) {
    super(props);
    // this.props=props;
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }
  render() {

    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
        >
          Open Dialog
        </Button>
        <Modal
          visible={this.state.open}
          onClose={this.handleClose}
          fullWidth={this.props.fullWidth}
          fullScreen={this.props.fullScreen}
          {...this.props}
        >
          <ModalHeader>
            UserLocation Service
          </ModalHeader>
          <ModalBody>
            <ModalBodyText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </ModalBodyText>
          </ModalBody>
          <ModalFooter>

            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" >
              Agree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" >
              Agree
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalStoryComponent;
