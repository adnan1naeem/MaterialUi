import * as React from 'react';
import Tabs from './Tabs.container';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Tabs', module);

stories.add('Tabs with containner', () => {
  return (<Tabs />);
});