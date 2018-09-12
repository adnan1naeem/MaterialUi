
# Overline Component

Typography component for Overline text. It applies following styles. Styles are fixed, cannot be overriden.

```javascript
{
    'fontFamily':'Roboto',
    'fontWeight':500,
    'fontSize':10,
    'letterSpacing': 1.5,
    'textTransform':'Capitalize' 
 }
```

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
|✔️       | ✔️           | ✔️   ✖            |

## Overline

### Props

| Name     | Type      | Default | Description                |
| :------- | :-------- | :------ | :------------------------- |
| children | string |         | The text to show with Overline heading style

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native                             |
| :----: | :---------: | :-----------------------------------------: |
|  ![Mobile iMage](./screenshots/Overline.png)  | TBD         |TBD      |

## How to use

```react
import React from 'react';

const Overline = BR.Components.get('Overline');


const component = (props) => {
        <Overline>Overline Typography</Overline>
    );
}

```