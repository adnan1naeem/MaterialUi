# List

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object | | style object for List. |
| children | Node | | Children of List component. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| className | string |  | className to give css styling. |
| subheader | Node |  |  subbheader of List. |
| disablePadding | bool |  | If true, padding is disabled. |
| dense | bool |  | If true, dense styling is used.. |

# ListItem

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object | | style object for ListItem. |
| children | Node | | Children of ListItem component. |
| active | bool | | If true, ListItem is rendered in active state. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| className | string |  | className to extend styling of Listitem. |
| button | bool |  | If true, ListItem will be a button. |
| component | string | li | component with which ListItem will be rendered. |
| href | string |  | src to which the ListItem will be directed. |
| onClick | function |  | If button/active, function to be called back when clicked. |
| disabled | bool |  | If true, ListItem is rendered disabled. |

# ListItemAvatar

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListItemAvatar. |
| src | string |  | src for the CardMedia.|
| size | number | 70  | size of the ListItemAvatar (in px). |
| className | string |  | className for styling component with css. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| children | Node |  | Children of ListItemAvatar. |

# ListItemRightButton

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListItemRightButton. |
| children | Node | | children of ListItemRightButton (expects a Button). |

# ListHeader

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListHeader. |
| children | Node | | Children of ListHeader component. |

# ListItemText

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListItemText. |
| children | Node | | Children of ListItemText component. |
| className | string |  | className for styling component with css. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| primary | Node |  | Primary text for ListItemText. |
| secondary | Node |  | Secondary text for ListItemText. |
| inset | bool |  | If true, the children will be indented. This should be used if there is no left avatar or left icon. |

# ListItemIcon

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListItemIcon. |
| children | Node | | children of ListItemIcon (expects an Icon). |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";


const myList = (props) => {
    const BR = props.bluerain;
    const View = BR.Components.get('View');
    const List = BR.Components.get('List');
    const ListItem = BR.Components.get('ListItem');
    const ListHeader = BR.Components.get('ListHeader');
    const ListItemText = BR.Components.get('ListItemText');
    const ListItemRightButton = BR.Components.get('ListItemRightButton');
    const ListItemIcon = BR.Components.get('ListItemIcon');
    const ListItemAvatar = BR.Components.get('ListItemAvatar');
    return (
<List>
    <ListItem button>
    <Avatar size={40}>
    <DraftsIcon />
    </Avatar>
    <ListItemText primary="Photos" secondary="Jan 9, 2016" />
    </ListItem>
    <ListItem button disabled>
    <Avatar>
        <DraftsIcon />
    </Avatar>
    <ListItemText primary="Work" secondary="Jan 7, 2016" />
    </ListItem>
</List>
    );
}

export default withBluerain(myList);
```

## Storybook

- Last story of the List component in List.stories.tsx file is written with knobs to visualize the effects when different props are changed.

## Tests

- All the tests through jest are passed and create screenshot.