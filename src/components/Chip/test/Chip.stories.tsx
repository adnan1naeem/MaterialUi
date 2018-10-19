import * as React from 'react';
import { object, text, withKnobs, boolean } from '@storybook/addon-knobs';
import { Chip } from '../../Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Avatar from '@material-ui/core/Avatar';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
// import BR from '@blueeast/bluerain-os';

const chipDefaultStyle = { 'background-color': 'white', 'color': 'red' };
const stories = storiesOf('Chip', module);
stories.add('Chip with default value', () => {
  return <Chip label="Basic Chip" />;
});

stories.addDecorator(withKnobs).add('Chip with style & clickable property', () => {
  const style = object('Style of Chip', chipDefaultStyle);
  const content = text('Text', '10 % off');
  const click = boolean('boolean', false);
  return (
    <Chip
      style={style}
      label={content}
      clickable={click}
    />);
});
stories.addDecorator(withKnobs).add('Chip with OnClick', () => {
  const style = object('Style of Chip', chipDefaultStyle);
  const content = text('Text', 'Clickable Chip');
  return (
    <Chip
      style={style}
      avatar={<Avatar>MB</Avatar>}
      label={content}
      onClick={action('Chip clicked')}
    />);
});
stories.addDecorator(withKnobs).add('Chip with onDelete', () => {
  const content = text('Text', 'Clickable Deletable Chip');
  return (
    <Chip
      icon={<FaceIcon />}
      label={content}
      onClick={action('Chip clicked')}
      onDelete={action('Chip on Delete')}
      deleteIcon={<DoneIcon />}
    />);
});
stories.addDecorator(withKnobs).add('Chip with Avatar', () => {
  const content = text('Text', 'Deletable Secondary Chip');
  return (
    <Chip
      avatar={
        <Avatar>
          <FaceIcon />
        </Avatar>
      }
      label={content}
      onDelete={action('Chip on Delete')}
      color="secondary"
    />);
});
stories.addDecorator(withKnobs).add('Chip with Icon', () => {
  const content = text('Text', 'Deletable Secondary Chip');
  return (
    <Chip
      icon={<FaceIcon />}
      label={content}
      onDelete={action('Chip on Delete')}
      color="secondary"
    />);
});
stories.addDecorator(withKnobs).add('Chip with Clickable', () => {
  const content = text('Text', 'Deletable Secondary Chip');
  return (
    <Chip
      icon={<FaceIcon />}
      label={content}
      onDelete={action('Chip on Delete')}
      color="secondary"
    />);
});