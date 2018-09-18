import { storiesOf } from '@storybook/react';
import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Body2 from '../Body2.component';

const stories = storiesOf('Typography  Body 2', module);

stories.addDecorator(withKnobs).add('Component Body2', () => {
  return (
    <Body2 style={{ color: 'blue' }}>{text('Body2Content', 'This is Body2 typography')}</Body2>
  );
}
);
