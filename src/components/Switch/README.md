# Switch

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✔️      | ✖            | ✖              |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
| ![web image](./screenshots/Switch.png) |    TBD   | TBD |

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| disabled | bool | | if true, switch is rendered in disabled form.. |
| value | bool | | value of the switch. |
| onValueChange | function | | Invoked with the new value when the value changes. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| checked | string or bool |  | Keeps the value unchanged. |
| disableRipple | boolean | | boolean prop to set disable/enable switch. |
| icon | ReactNode | | The icon to display when the component is unchecked. |
| checkedIcon | ReactNode | | The icon to display when the component is checked. |
| inputProps | object | | Attributes applied to the input element. |
| type | string | | The input component property type. |
| color | object | 'secondary' | The color of the component. It supports those theme colors that make sense for this component. |

## How to use

```JavaScript
import React from 'react';
import BR from '@blueeast/bluerain-os';

const Switch = (props) => {
    const Switch = BR.Components.get('Switch');
    return (
        <Switch
            disabled={false}
            value={true}
            onValueChange={console.log('Value changed!')}
             />
    );
}
export default Switch;
```