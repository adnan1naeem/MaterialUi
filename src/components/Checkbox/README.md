# Checkbox

Checkboxes allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off.

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✔️     | ✖           | ✖             |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
| ![web image](./screenshots/Checkbox.png)  |    TBD   |  TBD |

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| disabled | boolean | false | If true, disable all interactions for this component. |
| onPress | () => void |  | Callback when the checkbox is pressed. |
| color | string | | color of checkbox. (not supported for bootstrap). |
| label | ReactNode |  | label to show with checkbox. |
| value | boolean | | The value of the checkbox. If true the checkbox will be turned on. Default value is false (not supported for Bootstrap). |
| testID | string | | Used to locate this view in end-to-end tests. Substitute of value prop for MUI Checkbox. |

## All Material-UI Props are also supported

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| color | enum::'primary','secondary','default' | | The color of the component. It supports those theme colors|
| inputRef | ()=> void ,object | | Use that property to pass a ref callback to the native input component |
| indeterminate | boolean | false  | If true, the component appears indeterminate. |
|indeterminateIcon | ReactNode | IndeterminateCheckBoxIcon | The icon to display when the component is indeterminate |
|inputProps| object | | Properties applied to the input element.|
|disableRipple| boolean | |If true, the ripple effect will be disabled|
|icon| ReactNode | | The icon to display when the component is unchecked..|
|checkedIcon| ReactNode | CheckBoxIcon | The icon to display when the component is checked.|
|type| ssytinf | | The input component property type|

## How to use

```JavaScript
import React from 'react';
import  BR from "@blueeast/bluerain-os";

const CheckboxSample = (props) => {

    return (
        <BR.Components.Checkbox label="Label Checkbox"     color="primary" />
    )
}

export default CheckboxSample;
```
