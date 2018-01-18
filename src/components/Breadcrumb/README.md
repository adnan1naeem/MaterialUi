## Breadcrumb
### Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| label | string | Home | Label of the Breadcrumb component to be shown as disabled. |
| data | [ { } ] | | Data should be an object of title and pathname of types "node" and "string" respectively i.e. [ { title: ' ', pathname: '/' }] |
| colorActive | string | black | Color of the text of current page name. Can be string consisting of rgba, hsl, name or #code format. |
| colorPrev | string | dodgerblue | Color of the text of previous page name. Can be string consisting of rgba, hsl, name or #code format. |

### Component Usages
1. Indicate the current page's location within a navigational hierarchy that automatically adds separators by using the breadcrumb component.

### How to use
Below is the sample code to use the component:

``` 
import React from 'react';  
import Breadcrumb from  'bluerain-ui/Breadcrumb';


const label = 'Site';
const data = [{ title:'CardView', path: 'www.facebook.com' }];

const BreadcrumbExampleSimple = () => (
  <div>
    <Breadcrumb data={data} label={label}/>
    <Breadcrumb data={[
    { title:'CardView1', path: 'www.facebook.com' }, 
    { title:'CardView2', path: 'www.linkedin.com' }, 
    { title:'CardView3', path: 'www.instagram.com' }]} 
    label="Current" />
    <Breadcrumb />
  </div>
);

export default BreadcrumbExampleSimple;
```

### Behaviors
1. Normal state: Normal state of the component shows current page name in black color and previous page name as a link in dodgerblue color. These color can be set with colorPrev and colorActive props if wanted.  
<img src='Normal.png'/>
2. Multiple state: Multiple state is when data prop is sent as an array of objects as can be seen in the below.  
<img src="Multiple.png"/>  
If label prop is not passed, "Home" is used by default.
3. Empty state: No empty state.
4. Error handling: If bad data is provided, a message is shown to the user as can be seen in the below.  
<img src='BadData.png'/>

### Storybook
- First story of the Breadcrumb component in Breadcrumb.stories.js file is written with prop "label", "data", "colorActive" and "colorPrev" to visualize the effects of the changes and onClick can be seen in actionLogger.
- All the tests through storyshots are passed.
