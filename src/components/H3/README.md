
# H3 Component

Typography component for headings. It applies following styles. Styles are fixed, cannot be overriden.

```javascript
{
    'fontFamily':'Roboto',
    'fontWeight':'400',
    'fontSize':48,
    'letterSpacing': 0
 };
```

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✔️     | ✔           | ✖               |

## H3

### Props

| Name     | Type   | Default | Description                            |
| :------- | :----- | :------ | :------------------------------------- |
| children | string |         | The text to show with H3 heading style |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native                       |
| :----: | :---------: | :-----------------------------------: |
| TBD    | TBD         | ![mobile image](./screenshots/H3.png) |

## How to use

```react
import React from 'react';

const H3 = BR.Components.get('H3');


const component = (props) => {
        <H3>H3 Typography</H3>
    );
}

```