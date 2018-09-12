
# H5 Component

Typography component for headings. It applies following styles. Styles are fixed, cannot be overriden.

```javascript
{
    'fontFamily':'Roboto',
    'fontWeight':400,
    'fontSize':24,
    'letterSpacing': 0
 }
```

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
|  ✔️      |  ✔️        | ✖              |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|   TBD  |    TBD   |  ![mobile image](./screenshots/H5.png)|

### Props

| Name     | Type      | Default | Description                |
| :------- | :-------- | :------ | :------------------------- |
| children | string |         | The text to show with H5 heading style

## How to use

```react
import React from 'react';

const H5 = BR.Components.get('H5');


const component = (props) => {
        <H5>H5 Typography</H5>
    );
}

```