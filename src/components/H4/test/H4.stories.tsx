import { storiesOf } from '@storybook/react';
import React from 'react';
import H4 from '../H4.component';


const stories = storiesOf('Typography - H4', module);

stories.add('Component H4', () => {
  return (
    <H4>This is H4 typography</H4>
  );
}
);
