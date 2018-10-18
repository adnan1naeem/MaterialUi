import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuPopper, MenuItem } from '../index';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const styles = (theme: any) => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class SimplePopper extends React.Component<any, any>{
  state = {
    // anchorEl: null,
    open: false,
  };

  handleClick = (event: any) => {
    const { currentTarget } = event;
    this.setState({
      anchorEl: currentTarget,
      open: !this.state.open,
    });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Button variant="contained" onClick={this.handleClick}>
          Toggle Popper
        </Button>
        <MenuPopper open={open}
        >
          <Paper>

            <MenuItem value="xyz">Item 1 </MenuItem>
            <MenuItem value="abc">Item 2 </MenuItem>
            <MenuItem value="abc">Item 3 </MenuItem>
            <MenuItem value="abc">Item 4 </MenuItem>
            <MenuItem value="abc">Item 5 </MenuItem>
          </Paper>

        </MenuPopper>


      </div>
    );
  }
}

// SimplePopper.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SimplePopper);