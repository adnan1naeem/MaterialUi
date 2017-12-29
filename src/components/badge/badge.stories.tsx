import * as React from 'react';
import Badge from './badge';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Badge', module);
stories.add('Badge (with knobs)', () => {

    return <Badge badgeContent={'test'}>123</Badge>;
});