// // import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
// // import { List, ListItem, ListItemText } from '../List';
// import { Manager, Popper, Target } from 'react-popper';
// // import { Menu, MenuItem } from '../Menu';
// import { MenuItem } from '../Menu';
// // import { Button } from '../Button';
// import { MenuList } from 'material-ui/Menu';
// import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
// import Grow from 'material-ui/transitions/Grow';
// import Paper from 'material-ui/Paper';
// import React from 'react';
// // import Button from 'material-ui/Button';
// // import Fade from 'material-ui/transitions/Fade';

// export interface MenuPopperProperties {
//   menuListProps?: any;
//   paperProps?: any;
//   menuItems?: any;
//   placement?:
//   'right' |
//   'right-end' |
//   'right-start' |
//   'left' |
//   'left-end' |
//   'left-start' |
//   'top' |
//   'top-end' |
//   'top-start' |
//   'bottom' |
//   'bottom-end' |
//   'bottom-start';
//   component?: (props: any) => (React.ReactNode);
//   style?: any;
// }

// class MenuPopper extends React.Component<MenuPopperProperties, { anchorEl:any }> {
//   target1: any = '';
//   state = {
//     anchorEl: {},
//   };

//   handleOpen = (event: any) => {
//     this.setState({ anchorEl: event.currentTarget });
//   }

//   handleClose = (event: any, onClick?: () => void) => {
//     if (this.target1.contains(event.target)) {
//       return;
//     }
//     onClick ? onClick() : console.log('No Click functionality passed');
//     this.setState({ anchorEl: null });
//   }

//   render() {
//     const { anchorEl } = this.state;

//     return (
//       <div style={this.props.style}>
//         <Manager>
//           <Target>
//             <div
//               ref={node => {
//                 this.target1 = node;
//               }}
//             >
//               {this.props.component ? this.props.component(this.handleOpen) : null}
//             </div>
//           </Target>

//           <Popper
//             placement={this.props.placement}
//             eventsEnabled={Boolean(anchorEl)}
//           >
//             <ClickAwayListener onClickAway={this.handleClose}>
//               <Grow in={Boolean(anchorEl)} style={{ transformOrigin: '0 0 0' }}>
//                 <Paper {...this.props.paperProps}>
//                   <MenuList
//                     role="menu"
//                     {...this.props.menuListProps}
//                   >
//                     {
//                       this.props.menuItems && Boolean(anchorEl) ? this.props.menuItems.map((each:any) => (
//                         <MenuItem onClick={(e:any) => this.handleClose(e, each.onClick)} style={each.style} {...each.otherProps}>
//                           {each.title}
//                         </MenuItem>
//                       )) : null
//                     }
//                   </MenuList>
//                 </Paper>
//               </Grow>
//             </ClickAwayListener>
//           </Popper>
//         </Manager>
//       </div>
//     );
//   }
// }

// export default MenuPopper;