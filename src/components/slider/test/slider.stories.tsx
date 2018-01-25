import * as React from 'react';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Slider from '../../slider';
const stories = storiesOf('Slider', module);
stories.add('Slider (with knobs)', () => {
	const disabled = boolean('disabled', false);
	const defaultValue = number('defaultValue', 150);
	return <Slider disabled={disabled} defaultValue={defaultValue} onValueChange={action('Value is changed')} maximumValue={200} minimumValue={100} onSlidingComplete={action('Sliding Complete at')}/>;
});
stories.add('Slider (default without knobs)', () => {
	return  (
        <div style={{ margin:20 }}>
    <Slider onSlidingComplete={action('Value is changed commpletely')} />
    </div>);
});