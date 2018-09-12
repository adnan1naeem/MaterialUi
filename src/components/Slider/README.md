# Slider

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| defaultValue | number | 0 | Initial value of the slider. |
| maximumValue | number | 100 | Maximum value of slider. |
| mininimumValue | number | 0 | Minimum value of slider.. |
| onValueChange | function | | Invoked with the new value when the value changes. |

## NOTES

For the time being, We are providing only 4 props for MuiTheme, described above. They will surely increase to enhance performance of our Slider component.

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const Slider = (props) => (
    const BR = props.bluerain;
    const Slider = BR.Components.get('Slider');
    return <Slider maximumValue={200} minimumValue={0} defaultValue={8} onValueChange={console.log('Value is changed!')} />;

export default withBluerain(Slider);
```

## Storybook

- 1st story of the Slider component in Slider.stories.tsx file is written for Slider with Knobs.

## Tests

- All the tests through jest are passed and create screenshot.