import * as React from 'react';
import Badge from './badge';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
const stories = storiesOf('Badge', module);
stories.add('Badge (with knobs)', () => {
	const content = text('content', 'abc');
	const colour = text('color', 'primary');
	return <Badge badgeContent={content} color={colour}></Badge>;
});

stories.add('Badge (withOut knobs)', () => {
	return <Badge badgeContent={123} color={'accent'}></Badge>;
});