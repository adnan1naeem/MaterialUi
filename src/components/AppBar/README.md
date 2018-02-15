# AppBar

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| color | 'inherit', 'primary', 'accent', 'default', undefined | | Background color for AppBar. |
| children | Node | | Children of AppBar. |
| position | 'static' | 'fixed' | 'absolute' | undefined | | position of AppBar. |
| className | string | | className props to extend styles through CSS for AppBar. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const AppBar = (props) => (
    const BR = props.bluerain;
    const AppBar = BR.Components.get('AppBar');
    const Button = BR.Components.get('Button');
    const Text = BR.Components.get('Text');
    return(<AppBar position="static" color="default">
          <Button style={{ backgroundColor:'transparent', boxShadow:'none', border:0 }}>
            <AssignmentIcon />
          </Button>
          <Text style={{ display:'flex', flex: 1 }}>
            Title
            </Text>
          <Button color="default">Login</Button>
      </AppBar>);

export default withBluerain(AppBar);
```

## Storybook

- All stories of the AppBar component in AppBar.stories.tsx file show variants of AppBar.

## Tests

- All the tests through jest are passed and create screenshot.