# DropDown

DropDown components are used for collecting user provided information from a list of options.

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✔️     | ✖           | ✖               |

## Screenshots

| 🌏 Web                                   | 🖥 Electron | 📱 React Native |
| :--------------------------------------: | :---------: | :-------------: |
| ![web image](./screenshots/DropDown.png) | TBD         | TBD             |

## Universal Props

| Name          | Type      | Default | Description                         |
| :------------ | :-------- | :------ | :---------------------------------- |
| selectedValue | any       |         | value of selection                  |
| onValueChange | ReactNode |         | callback Function for handle change |

## Specific Library Props

| Name          | Type      | Default | Description                                                                                                                                                      |
| :------------ | :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoWidth     | boolean   |         | If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input. |
| classes       | object    |         | Useful to extend the style applied to components.                                                                                                                |
| displayEmpty  | boolean   |         | If true, the selected item is displayed even if its value is empty. You can only use it when the native property is false (default).                             |
| MenuProps     | object    |         | Properties applied to the Menu element.                                                                                                                          |
| native        | boolean   |         | If true, the component will be using a native select element.                                                                                                    |
| renderValue   | function  |         | Render the selected value. You can only use it when the native property is false (default).                                                                      |
| disabled      | boolean   |         | The input value, required for a controlled component.                                                                                                            |
| input         | ReactNode |         | An Input element; does not have to be a material-ui specific Input.                                                                                              |
| value         | string    |         | displays value of dropdown.                                                                                                                                      |
| IconComponent | string    |         | displays Icon Component of dropdown.                                                                                                                             |
| onOpen        | function  |         | opens the dropdown.                                                                                                                                              |

| variant | string    |         | Adds the  dropdown. type |

## How to use

```JavaScript
import React from 'react';
import  BR from  '@blueeast/bluerain-os';

const DropDownSample = () => (
    const DropDown = BR.Components.get('DropDown');
    const DropdownItem = BR.Components.get('DropdownItem');

    <DropDown onValueChange={onChange} value={'xyz'} autoWidth={true}  style={style.dropdown}>
        <DropdownItem value="xyz">Item 1 </DropdownItem>
        <DropdownItem value="abc">Item 2 </DropdownItem>
        <DropdownItem value="abc">Item 3 </DropdownItem>
        <DropdownItem value="abc">Item 4 </DropdownItem>
        <DropdownItem value="abc">Item 5 </DropdownItem>
    </DropDown>
);

export default DropDownSample;
```
