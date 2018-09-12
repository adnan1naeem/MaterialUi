
# H4 Component

Typography component for headings. It applies following styles. Styles are fixed, cannot be overriden.

```javascript
{
    'fontFamily':'Roboto',
    'fontWeight':400,
    'fontSize':34,
    'letterSpacing': 0.25
 };
```

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✔️     | ✔️         |  ✖             |

## H4

### Props

| Name     | Type      | Default | Description                |
| :------- | :-------- | :------ | :------------------------- |
| children | string |         | The text to show with H4 heading style

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|   TBD  |    TBD   |  ![mobile image](./screenshots/H4.png)|

## How to use

```react
import React from 'react';

const H4 = BR.Components.get('H4');


const component = (props) => {
        <H4>H4 Typography</H4>
    );
}

```