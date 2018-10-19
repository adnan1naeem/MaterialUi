import * as React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Divider } from '../../Divider';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Divider', module);

stories.addDecorator(withKnobs).add('Divider (with knobs)', () => {
  const light = boolean('light prop', false);
  return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider light={light} /></div>;
});

stories.add('Divider  with inset and  light prop', () => {
  return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider light={false} inset={true} /></div>;
});


stories.add('Divider with light Prop true', () => {
  return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider light={true} /></div>;
});



stories.add('Divider with light Prop false', () => {
  return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider light={false} /></div>;
});


stories.add('Divider with inset Prop false', () => {
  return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider inset={false} /></div>;
});


stories.add('Divider with inset Prop true', () => {
  return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider inset={true} /></div>;
});



stories.add('Divider with component prop', () => {
  const comp = () => 'Divider';
  return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider component={'Divider'} /></div>;
});