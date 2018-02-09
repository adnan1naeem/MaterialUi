import * as React from 'react';
import Divider from '../../Divider';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
const stories = storiesOf('Badge', module);
stories.add('Divider (with knobs)', () => {
	const content = text('content', 'abc');
	const colour = text('color', 'primary');
	return <Divider badgeContent={content} color={colour}></Divider>;
});

stories.add('Divider (withOut knobs)', () => {
	return <Divider badgeContent={123} color={'accent'}></Divider>;
});