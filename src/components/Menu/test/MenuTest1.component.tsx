import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
import { List, ListItem, ListItemText } from '../../List';
import { Menu, MenuItem } from '../../Menu';
import { Button } from '../../Button';
import React from 'react';
// import Button from 'material-ui/Button';
// import Fade from 'material-ui/transitions/Fade';

class FadeMenu extends React.Component<any, { anchorEl: any, anchorEl2: any }> {
  state = {
    anchorEl: null,
    anchorEl2: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    this.setState({ anchorEl2: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
    this.setState({ anchorEl2: null });
  }

  render() {
    const { anchorEl, anchorEl2 } = this.state;

    return (
      <div>
        <div>
          <ListItem
            button
            onClick={this.handleClick}
            style={{ width: 150 }}
            aria-controls="fade-menu"
          >
            Hello
          </ListItem>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl !== null ? anchorEl : undefined}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>wow</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <div>
          <ListItem
            button
            onClick={this.handleClick}
            style={{ width: 150 }}
            aria-controls="fade-menu2"
          >
            Hello
          </ListItem>
          <Menu
            id="fade-menu2"
            anchorEl={anchorEl2 !== null ? anchorEl2 : undefined}
            open={Boolean(anchorEl2)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profdasile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    );
  }
}

export default FadeMenu;