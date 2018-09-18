
# H2 Component

Typography component for h2 headings. It applies following styles. Styles are fixed, cannot be overriden.

```javascript
{
    'fontFamily':'Roboto',
    'fontWeight':300,
    'fontSize':60,
    'letterSpacing': -0.5
 }
```

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
|  ✔️       | ✖            |✖            |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|   ![web image](./screenshots/H2.png)  |    TBD   |  TBD |

### Props

| Name     | Type      | Default | Description                |
| :------- | :-------- | :------ | :------------------------- |
| children | string |         | The text to show with H2 heading style|
| style | object |         | style object for H2 |

## How to use

```javascript
import React from 'react';
import BR from '@blueeast/bluerain-os';

const H2 = BR.Components.get('H2');

const H2Sample = (props) => (
       <H2>H2 Typography</H2>
    );
export default H2Sample;
```