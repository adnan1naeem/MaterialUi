import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { ListHeader } from '../../List';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('ListHeader', module).add('ListHeader with children prop', () =>
<ListHeader>ListHeader</ListHeader>);