/**
 * Created by Ghazal Taimur on 12/29/17.
 */
import * as React from 'react';
import Chip from './chip';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Chip', module);
stories.add('Chip with default value', () => {
    return <Chip>9 % off</Chip>;
});

stories.add('Chip with style', () => {
    return <Chip style={{'root' : {'background-color':'green'}}} label={'testtte'}>9 % off</Chip>;
});