import { storiesOf } from '@storybook/react';
import React from 'react';
import Caption from '../Caption.component';
import { text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Typography - Caption', module);

stories.addDecorator(withKnobs).add('Component Caption', () => {
  return (
    <Caption>{text('Content', 'This is Caption typography')}</Caption>
  );
}
);
