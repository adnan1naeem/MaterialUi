import * as React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Switch } from '../../Switch';
import BlueRainSwitch from './Switchtest';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Switch', module);

stories.addDecorator(withKnobs).add('Switch (with knobs)', () => {
  const disabled = boolean('disabled', false);
  const value = boolean('value', true);
  return (<Switch
    disabled={disabled}
    onValueChange={action('Value is changed')}
    checked={value}
  />);
});

stories.add('Switch (default)', () => {
  return (
    <Switch />);
});
stories.add('Switch with color properties', () => {
  return (
    <Switch
      color="primary"
    />);
});


stories.add('Switch (MUI specific props)', () => {
  return (
    <div style={{ display: 'flex', }}>
      <Switch aria-label="checkedD" />
      <Switch
        value={true}
        onValueChange={action('Value is changed!')}
        aria-label="checkedD"
        mvalue="Switch"
        color="secondary"
      />
    </div>);
});

stories.add('Switch with states', () => {
  return (
    <BlueRainSwitch muValue={'switch'} />);
});