
# H6 Component

Typography component for h6 headings. It applies following styles. Styles are fixed, cannot be overriden.

```javascript
{
    'fontFamily':'Roboto',
    'fontWeight':500,
    'fontSize':20,
    'letterSpacing': 0.15
 }
```

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
|  ✔️       | ✖            |✖            |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|   ![web image](./screenshots/H6.png)  |    TBD   |  TBD |

### Props

| Name     | Type      | Default | Description                |
| :------- | :-------- | :------ | :------------------------- |
| children | string |         | The text to show with H6 heading style|
| style | object |         | style object for H6 |

## How to use

```javascript
import React from 'react';
import BR from '@blueeast/bluerain-os';

const H6 = BR.Components.get('H6');

const H6Sample = (props) => (
       <H6>H6 Typography</H6>
    );
export default H6Sample;
```