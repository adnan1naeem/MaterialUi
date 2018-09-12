
# H1 Component

Typography component for headings. It applies following styles. Styles are fixed, cannot be overriden.

```javascript
{
   'fontFamily':'Roboto',
   'fontWeight':300,
   'fontSize':96,
   'letterSpacing': 1.5
}
```

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✖      | ✖           | ✔️              |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|   TBD  |    TBD   |  ![mobile image](./screenshots/Overline.png)|

### Props

| Name     | Type      | Default | Description                |
| :------- | :-------- | :------ | :------------------------- |
| children | string |         | The text to show with H1 heading style

## How to use

```react
import React from 'react';

const H1 = BR.Components.get('H1');


const component = (props) => {
        <H1>H1 Typography</H1>
    );
}

```