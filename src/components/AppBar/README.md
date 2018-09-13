# AppBar

The top App Bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✔️      | ✖            | ✖              |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
| ![web image](./screenshots/AppBar.png) |    TBD   | TBD |

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| color | enum: 'inherit', 'primary', 'accent', 'default', undefined | | Background color for AppBar. |
| children | Node | | Children of AppBar. |
| position | enum: 'static', 'fixed', 'absolute', undefined | | Position of AppBar. |
| className | string | | className props to extend styles through CSS for AppBar. |

## How to use

```JavaScript
import React from 'react';
import BR from '@blueeast/bluerain-os';

const AppBarSample = (props) => (
    const AppBar = BR.Components.get('AppBar');
    const Button = BR.Components.get('Button');
    const Icon = BR.Components.get('Icon');
   return (
    <AppBar
     left={<Button fab={true} style={AppBarStoriesStyle}><Icon name="assignment"/></Button>}
     title={'Title'}
     right={<Button color="primary">Login</Button>}
     position="fixed"
     color="primary"
     style={{ backgroundColor: 'red' }}/>
     );

export default AppBarSample;
```