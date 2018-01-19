import * as React from 'react';
import IconComponent from './Icon';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

const stories = storiesOf('Footer Bar', module);

stories.add('Footer Icons', () => {
    const name = text('Icon Name', 'heart');
    const color = text('Icon Color', 'black');
    const size = text('Icon Size', 200);
    const borderColor = text('Border Color', 'yellow');
  return <IconComponent name={name} color={color} borderColor={borderColor} size={size} />;
});
