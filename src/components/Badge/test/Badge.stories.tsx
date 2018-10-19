import * as React from 'react';
import { text, withKnobs, object } from '@storybook/addon-knobs';
import { Badge } from '../../Badge';
import { storiesOf } from '@storybook/react';
import MailIcon from '@material-ui/icons/Mail';

const backgroundColor = '#0f0';
const DefaultStyle = { 'background-color': backgroundColor };
const stories = storiesOf('Badge', module);

stories.addDecorator(withKnobs).add('Badgse (with knobs)', () => {
  const content = text('content', 'abc');
  const Style = object('Style of Badge', DefaultStyle)
  return <Badge badgeContent={content} style={Style} color="primary"><MailIcon /></Badge>;
});

stories.add('Badge with color secondary', () => {

  return <Badge badgeContent={3} color="secondary"><MailIcon /></Badge>;
});

stories.addDecorator(withKnobs).add('Badge with  color error', () => {
  return <Badge badgeContent={5} color="error"><MailIcon /></Badge>;
});