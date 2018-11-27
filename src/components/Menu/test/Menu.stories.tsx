// import ListItem from '@material-ui/core/ListItem';
// import { Menu, MenuItem } from '../index';
// import Button from '@material-ui/core/Button';
// import { storiesOf } from '@storybook/react';
// import FadeMenu from './MenuTest1.component';
// import MenuPopper from './MenuPopperSample.component';
// import Paper from '@material-ui/core/Paper';
// import React from 'react';

// const stories = storiesOf('Menu', module);

// const onChange = (event: any) => {
//   const value = event.target.value;
// };
// const style = { root: { padding: 20 }, dropdown: { width: 400 } };
// const multiItems = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder'
// ];

// stories.add('Menu Closed', () => {
//   return (
//     <Paper style={style.root}>
//       <Menu open={false} style={style.dropdown}>
//         <MenuItem value="xyz">Item 1 </MenuItem>
//         <MenuItem value="abc">Item 2 </MenuItem>
//         <MenuItem value="abc">Item 3 </MenuItem>
//         <MenuItem value="abc">Item 4 </MenuItem>
//         <MenuItem value="abc">Item 5 </MenuItem>
//       </Menu>
//     </Paper>);
// }
// );

// stories.add('Dropdown with autoWidth', () => {
//   return (
//     <Paper style={style.root}>
//       <Menu open={true} style={style.dropdown}>
//         <MenuItem value="xyz">Item 1 </MenuItem>
//         <MenuItem value="abc">Item 2 </MenuItem>
//         <MenuItem value="abc">Item 3 </MenuItem>
//         <MenuItem value="abc">Item 4 </MenuItem>
//         <MenuItem value="abc">Item 5 </MenuItem>
//       </Menu>
//     </Paper>);
// }
// );

// stories.add('Dropdown with Override styles', () => {
//   return (
//     <Paper style={style.root}>
//       <Menu style={{ width: 600, backgroundColor: 'green' }} open={true}>
//         <MenuItem >Item 1 </MenuItem>
//         <MenuItem >Item 2 </MenuItem>
//         <MenuItem >Item 3 </MenuItem>
//         <MenuItem >Item 4 </MenuItem>
//         <MenuItem >Item 5 </MenuItem>
//       </Menu>
//     </Paper>);
// }
// );

// stories.add('Menu with disabled', () => {
//   return (
//     <Paper style={style.root}>
//       <Menu style={style.dropdown} open={true}>
//         <MenuItem >Item 1 </MenuItem>
//         <MenuItem >Item 2 </MenuItem>
//         <MenuItem >Item 3 </MenuItem>
//         <MenuItem >Item 4 </MenuItem>
//         <MenuItem >Item 5 </MenuItem>
//       </Menu>
//     </Paper>);
// }
// );

// stories.add('MenuList Component', () => {
//   return (
//     <FadeMenu />
//   );
// }
// );

// const menuItems = [
//   {
//     title: 'Profile',
//     onClick: () => console.log('Profile Clicked'),
//     style: {},
//     otherProps: {}
//   }, {
//     title: 'My account',
//     onClick: () => console.log('My account Clicked'),
//     style: {},
//     otherProps: {}
//   }, {
//     title: 'Logout',
//     onClick: () => console.log('Logout Clicked'),
//     style: {},
//     otherProps: {}
//   }
// ];

// stories.add('Menu Popper List Component', () => {
//   return (
//     <MenuPopper
//       open={false} />
//   );
// });

// stories.add('Menu Popper List Component placement right', () => {
//   return (
//     <div >
//       <MenuPopper
//         open={false}
//       />
//     </div>
//   );
// });



// stories.add('Menu Popper Button Component placement right', () => {
//   return (
//     <div style={{ width: 200, height: 100, marginTop: 200 }}>
//       <MenuPopper
//         open={true}
//       />
//     </div>
//   );
// });
