
# H4 Component

Typography component for h4 headings. It applies following styles. Styles are fixed, cannot be overriden.

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
|  ✔️       | ✖            |✖            |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|   ![web image](./screenshots/H4.png)  |    TBD   |  TBD |

### Props

| Name     | Type      | Default | Description                |
| :------- | :-------- | :------ | :------------------------- |
| children | string |         | The text to show with H4 heading style|
| style | object |         | style object for H4 |

## How to use

```javascript
import React from 'react';
import BR from '@blueeast/bluerain-os';

const H4 = BR.Components.get('H4');

const H4Sample = (props) => (
       <H4>H4 Typography</H4>
    );
export default H4Sample;
```