import * as React from 'react';
import Table from './Table.container';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Table', module);

stories.add('Table with containner', () => {
  return (<Table />);
});