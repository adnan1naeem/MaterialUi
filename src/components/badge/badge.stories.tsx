import * as React from 'react';
import Badge from './badge';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Badge', module);

stories.add('Badge (with knobs)', () => {
    const classes1 = {'color':'red'};
    return <Badge badgeContent = {7} style = {classes1} color="primary"></Badge>;
});