import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { ListItemRightButton } from '../../List';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Button from '../../Button';

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('ListItemRightButton', module).add('Card with style and raised props', () => (
<ListItemRightButton
    style={{ backgroundColor:'grey' }}
>
    <Button color="dark">Right</Button>
</ListItemRightButton>));
