import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { CardMedia } from '../../Card';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import React from 'react';

BR.boot({ renderApp:false });


storiesOf('CardMedia', module).add('CardMedia with src and height:400 prop', () =>
(
<CardMedia
    height={400}
    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
/>));


storiesOf('CardMedia', module).add('CardMedia with className prop', () =>
(
<CardMedia
    className="bg-img"
    height={40}
    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
/>));

storiesOf('CardMedia', module).add('CardMedia with style prop', () =>
(
<CardMedia
    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
/>));