// import * as React from 'react';
// import { ButtonProperties } from '@blueeast/bluerain-ui-interfaces';
// import Button from 'material-ui/Button';


// export const BlueRainButton: React.StatelessComponent<ButtonProperties> = (props) => {
//   const widthFull = { ...props.style, width: '100%' };
//   if (props.iconLeft) {
//     return (
//       <Button
//         raised={props.color === 'link' ? false : true}
//         color={props.color ? (props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default') : 'default'}
//         style={props.fullWidth ? widthFull : props.style}
//         disabled={props.disabled}
//         href={props.href}
//         fab={props.rounded}
//         mini={props.small}
//         onClick={props.onPress}
//         dense={props.small}
//       >
//         {props.iconLeft} {props.children}
//       </Button>
//     );
//   }
//   else if (props.iconRight) {
//     return (
//       <Button
//         raised={props.color === 'link' ? false : true}
//         color={props.color ? (props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default') : 'default'}
//         style={props.fullWidth ? widthFull : props.style}
//         disabled={props.disabled}
//         href={props.href}
//         fab={props.rounded}
//         mini={props.small}
//         onClick={props.onPress}
//         dense={props.small}
//       >
//         {props.children} {props.iconRight}
//       </Button>
//     );
//   }
//   return (
//     <Button
//       raised={props.color === 'link' ? false : true}
//       color={props.color ? (props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default') : 'default'}
//       style={props.fullWidth ? widthFull : props.style}
//       disabled={props.disabled}
//       href={props.href}
//       fab={props.rounded}
//       mini={props.small}
//       onClick={props.onPress}
//       dense={props.small}
//     >
//       {props.children}
//       {props.title}
//     </Button>
//   );
// };

