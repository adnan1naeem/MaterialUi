import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { ListItemAvatar } from '../../List';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';

storiesOf('ListItemAvatar', module).add('ListItemAvatar with size 800 and src props', () => (
<ListItemAvatar
    src="https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg"
    size={800}
/>));

storiesOf('ListItemAvatar', module).add('ListItemAvatar with size and src props', () => (
    <ListItemAvatar
        src="https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg"
        size={30}
    />));