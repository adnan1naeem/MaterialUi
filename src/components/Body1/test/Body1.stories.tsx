import { storiesOf } from '@storybook/react';
import {text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Body1 from '../Body1.component';

const stories = storiesOf('Typography - Body', module);

stories.addDecorator(withKnobs).add('Component Body1', () => {
  return (
    <Body1 style={{ color: 'blue' }}>{text('content','This is Body1 typography')}</Body1>
  );
}
);
