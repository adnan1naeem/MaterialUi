import * as React from 'react';
import Chip from './chip';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Logos', module);
stories.add('Header Logo (with knobs)', () => {

    return <Chip>test</Chip>;
});