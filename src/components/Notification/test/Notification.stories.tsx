import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Notification } from '../index';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import  PositionedSnackbar  from  './Notification.state.component';
import  { SimpleSnackbar } from './Notification.simple.components';

const stories = storiesOf('Notification', module);

stories.add('Notification', () => {

  return (
    <Notification
      open={() => console.log('open')}
      onClose={() => console.log('open')}
      transition={''}
      SnackbarContentProps={{ 'aria-describedby': 'message-id' }}
      text={<span id="message-id">I love snacks</span>}

    />
  );

});

stories.add('Postioned snackbar', () => {

  return (
    <div>
      <PositionedSnackbar />
    </div>
  );

});


stories.add(' SimpleSnackbar ', () => {

    return (
      <div>
        <SimpleSnackbar />
      </div>
    );

  });