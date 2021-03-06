# Divider

A divider is a thin line that groups content in lists and layouts.

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
| ✔️     | ✖           | ✖               |

## Screenshots

| 🌏 Web                                  | 🖥 Electron | 📱 React Native |
| :-------------------------------------: | :---------: | :-------------: |
| ![web image](./screenshots/Divider.png) | TBD         | TBD             |

## Specific Library Props

| Name      | Type   | Default | Description                                     |
| :-------- | :----- | :------ | :---------------------------------------------- |
| component | Node   | hr      | component to generate Divider with.             |
| inset     | bool   |         | if true, Divider is generated indented.         |
| absolute  | bool   | false   | Position of component.                          |
| light     | bool   |         | If true, Divider is generated with light color. |
| classes   | object | hr      | component is generated with classes             |

## How to use

```JavaScript
import React from 'react';
import BR from '@blueeast/bluerain-os';

const DividerSample = (props) => (

    const Divider = BR.Components.get('Divider');
    return <Divider light={false} />;

export default DividerSample;
```