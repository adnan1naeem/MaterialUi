import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from '../Text.component';


const stories = storiesOf('Typography - Text Component', module);

stories.add('Component Text with variant="body1"', () => {
  return (
    <Text>This is Body1 typography</Text>
  );
}).add('Component Text with variant="body2"', () => {
  return (
    <Text variant="body2">This is Body2 typography</Text>
  );
});
