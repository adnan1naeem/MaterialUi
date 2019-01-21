# :ExpansionPanel

## Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|    ✘ |     ✘     |   ✔  |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|   TBD  |    TBD   |  ![mobile image](./screenShots/AppBar.png)|

## props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| children?:| React.ReactNode;|    |children node in which we can send component|
|    title?: |string;|  title for expansion panel|             |
|   expandIcon?:| React.ReactNode;||  expand icon    |
|  closeIcon?:| React.ReactNode;||  close icon|
| style?: |object|||

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const ExpansionPanel = (props) => {
    const BR = props.bluerain;
    const ExpansionPanel = BR.Components.get('ExpansionPanel');
    const Button = BR.Components.get('Button');
    const Icon = BR.Components.get('Icon');
    const Text = BR.Components.get('Text');
    return(<ExpansionPanel title={'Categories'} expandIcon={<BR.Component.Icon name={closearrow}  closeIcon={<BR.Component.Icon name={closearrow}/>}
        ><View style={{ flexDirection: 'column' }}>
                <Text>Orient(250)</Text>
            </View></ExpansionPanel>);
}

export default withBluerain(ExpansionPanel);```

