# Icon

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| name | String |  | Name of the icon to be shown |
| color | String | | Color of the icon |
| size | String | | Size of the icon |


## How to use

```JavaScript
import React from 'react';
import {Icon} from 'react-fa';

const IconSample = (props) => (
    const BR = props.bluerain;
    const IconComponent = BR.Components.get('IconComponent');
    <IconComponent name='home' color='black' size={200} />
)

export default IconSample;
```

## Storybook

- 1st story of the Icon component in Icon.stories.tsx file is written for Icon with knobs and props for icon name, color and size.

