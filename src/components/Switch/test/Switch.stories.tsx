import * as React from 'react';
import { boolean, number , withKnobs } from '@storybook/addon-knobs';
import { Switch } from '../../Switch';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Switch', module);

stories.add('Switch (with knobs)', () => {
	const disabled = boolean('disabled', false);
	const value = boolean('value', true);
	return <Switch disabled={disabled} value={value} onValueChange={action('Value is',value)}/>;
});

stories.add('Switch (default)', () => {
	return  (
    <Switch />);
});

stories.add('Switch (MUI specific props)', () => {
	return  (
<div style={{ display:'flex', }}>
<Switch aria-label="checkedD" />
        <Switch
          checked={true}
          onChange={action('Value is changed!')}
          aria-label="checkedD"
        />
</div>);
});