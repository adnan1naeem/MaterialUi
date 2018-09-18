import { Notification } from  '../Notification.Components';
import Button from 'material-ui/Button';
import React from 'react';
// import Snackbar from 'material-ui/Snackbar';

class PositionedSnackbar extends React.Component {
  state = {
    open: false,
    vertical: 7,
    horizontal: 8,
  };

  handleClick = (state:any) => () => {
    this.setState({ open: true, ...state });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { vertical, horizontal, open } = this.state;
    const obj = { horizontal, vertical };
    return (
      <div>
        <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top-Center
        </Button>
        <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'right' })}>
          Top-Right
        </Button>
        <Button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'right' })}>
          Bottom-Right
        </Button>
        <Button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom-Center
        </Button>
        <Button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'left' })}>
          Bottom-Left
        </Button>
        <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'left' })}>
          Top-Left
        </Button>
        <Notification
          anchorOrigin={obj}
          open={open}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}

export default PositionedSnackbar;