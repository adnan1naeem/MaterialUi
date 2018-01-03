# Button

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object | | style object for button. |
| children | Node | | Content of the button component. |
| color | enum: 'default', 'inherit', 'primary', 'accent', 'contrast' | 'default' | Color of button component.|
| onClick | func | () => {} | Callback function fired when button is clicked. |
| disabled | bool |  | If true, renders a disabled button. |
| href | string | | href prop to move to a link. |
| fullWidth | bool |  | If true, button is generated with 100% width of the cnotainer. |
| iconLeft | Node |  | icon prop to show icon on the left side of label. |
| iconRight | Node | | icon prop to show icon on the right side of label. |
| fab | bool | | fab prop to show floating action button. |
| small | bool |  | If true, renders a small sized button. Also works if fab is true. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| dense | bool |  | Works same as small prop. |
| classes | object |  | Useful to extend the style applied to components. |
| className | string |  | className for button styling. |
| disableRipple | bool |  | If true, the ripple effect will be disabled. |
| disableFocusRipple | bool |  | If true, the keyboard focus ripple will be disabled. disableRipple must also be true. |
| component | union: string, func |  | The component used for the root node. Either a string to use a DOM element or a component. The default value is a button. |
| raised | bool | true | If true, button is generated with raised styling. |

## How to use

```JavaScript
import React from 'react';
import Button from  'bluerain-plugin-material-ui/Button';

const buttonSample = () => (
       <Button fullWidth color='accent'>Click me!</Button>
);

export default buttonSample;
```

## Storybook

- 1st story of the Button component in Button.stories.tsx file is written with knobs to visualize the effects when different props are changed.

## Tests

- All the tests through jest are passed and create screenshot.