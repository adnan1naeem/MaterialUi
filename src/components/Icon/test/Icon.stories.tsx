import { boolean, object, text , withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import IconComponent from '../../Icon';
import React from 'react';

const stories = storiesOf('Icons', module);

stories.add('Icon Component', () => {
	const name = text('Icon Name', 'heart');
	const color = text('Icon Color', 'black');
	const size = text('Icon Size', 200);
	const borderColor = text('Border Color', 'yellow');
	return <IconComponent name={name} color={color} borderColor={borderColor} size={size} />;
});
