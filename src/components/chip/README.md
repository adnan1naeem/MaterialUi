# Chip

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| children | ReactNode | | Content of the Chip |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| label | string |  | The content of the label. |
| onDelete | ReactNode | | Callback function fired when the delete icon is clicked. If set, the delete icon will be shown. |
| deleteIcon | ReactNode | | Custom delete icon element. Will be shown only if onDelete is set. |
| onClick | ReactNode | | Function when clicked on chip. |

## How to use

```JavaScript
import React from 'react';
import Chip from  'bluerain-plugin-material-ui/Chip';

const ChipSample = () => (
       <Chip style={{'background-color':'green'}}>10 % off</Chip>
);

export default ChipSample;
```

## Storybook

- 1st story of the Chip component in chip.stories.tsx file is written for Chip with default value.
- 2nd story of the Chip component in chip.stories.tsx file is written for Chip with knobs and prop "style".
- 3rd story of the Chip component in chip.stories.tsx file is written for Chip with knobs and prop "style" , "onClick".
- 4th story of the Chip component in chip.stories.tsx file is written for Chip without knobs and prop "style" , "onClick".

## Tests

- All the tests through jest are passed and create screenshot.
