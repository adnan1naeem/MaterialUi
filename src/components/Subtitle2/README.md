
# Subtitle2 Component

Typography component for subtitle2. It applies following styles. Styles are fixed, cannot be overriden.

```javascript
{
    'fontFamily': 'Roboto',
    'fontWeight': '400',
    'fontSize': 14,
    'letterSpacing': 0.1
}
```

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✔️     | ✔️          | ✖               |

## Subtitle2

### Props

| Name     | Type   | Default | Description                                   |
| :------- | :----- | :------ | :-------------------------------------------- |
| children | string |         | The text to show with Subtitle2 heading style |

## Screenshots

| 🌏 Web                                       | 🖥 Electron | 📱 React Native |
| :------------------------------------------: | :---------: | :-------------: |
| ![Mobile Image](./screenshots/Subtitle2.png) | TBD         | TBD             |

## How to use

```javascript
import React from 'react';
import Br from '@blueeast/bluerain-os';

const Subtitle2 = BR.Components.get('Subtitle2');

const Subtitle2Sample = (props) => ()
        <Subtitle2>Subtitle2 Typography</Subtitle2>
    );

export default Subtitle2Sample;

```