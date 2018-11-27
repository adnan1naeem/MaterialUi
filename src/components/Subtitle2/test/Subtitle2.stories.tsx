import { storiesOf } from '@storybook/react';
import React from 'react';
import Subtitle2 from '../Subtitle2.component';


const stories = storiesOf('Typography - Subtitle2', module);

stories.add('Component Subtitle2', () => {
  return (
    <Subtitle2>This is Subtitle2 typography</Subtitle2>
  );
}
);
