import { Notification } from  '../Notification.Components';
import Button from 'material-ui/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from 'material-ui/IconButton';
import React from 'react';

// const styles = (theme:any) => ({
//   close: {
//     width: theme.spacing.unit * 4,
//     height: theme.spacing.unit * 4,
//   },
// });

export class SimpleSnackbar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  }

  handleClose = () => {


    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Open simple snackbar</Button>
        <Notification
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Note archived</span>}
          action={[
            <Button key="undo" >
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}
