import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Divider from '../../Divider';
const stories = storiesOf('Badge', module);
stories.add('Divider (with knobs)', () => {
	const content = text('content', 'abc');
	const colour = text('color', 'primary');
	return <Divider badgeContent={content} color={colour}></Divider>;
});

stories.add('Divider (withOut knobs)', () => {
	return <Divider badgeContent={123} color={'accent'}></Divider>;
});