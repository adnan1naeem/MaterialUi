# Badge

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| badgeContent | ReactNode | | Content of the Badge |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| color | string |  | The color of the Badge. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const BadgeSample = (props) => (
    const BR = props.bluerain;
    const Badge = BR.Components.get('Badge');
    return <Badge badgeContent = {'786'} color = {'primary'}/>;

export default withBluerain(BadgeSample);
```

## Storybook

- 1st story of the Badge component in Badge.stories.tsx file is written for Badge with Knobs.
- 2nd story of the Badge component in Badge.stories.tsx file is written for Badge withOut knobs.

## Tests

- All the tests through jest are passed and create screenshot.