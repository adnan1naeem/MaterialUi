import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { Badge } from '../../Badge';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Badge', module);

stories.add('Badge (with knobs)', () => {
	const content = text('content', 'abc');
	const colour = text('color', 'primary');
	return <Badge badgeContent={content} color={colour}></Badge>;
});

stories.add('Badge (withOut knobs)', () => {
	return <Badge badgeContent={123} color={'accent'}></Badge>;
});