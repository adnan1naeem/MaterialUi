import * as React from 'react';
import {text, withKnobs } from '@storybook/addon-knobs';
import { Badge } from '../../Badge';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Badge', module);

stories.addDecorator(withKnobs).add('Badge (with knobs)', () => {
	const content = text('content', 'abc');
	return <Badge badgeContent={content} color="primary"></Badge>;
});

stories.add('Badge (withOut knobs)', () => {
	return <Badge badgeContent={123} color={'accent'}></Badge>;
});