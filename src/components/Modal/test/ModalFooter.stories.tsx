import * as React from 'react';
import Button from '@material-ui/core/Button';
import { storiesOf } from '@storybook/react';
import ModalFooter from '../ModalFooter.Component';

const stories = storiesOf('ModalFooter', module);
const Handler = () => {
  alert('clicked');
};
stories.add('ModalFooter taking as a children prop', () => {

  return (
    <ModalFooter>
      <Button onClick={Handler} color="primary" >
        Agree
				</Button>
      <Button onClick={Handler} color="primary">
        Disagree
				</Button>
    </ModalFooter>

  );

});



stories.add('ModalFooter  disableTypography prop', () => {
  return (
    <ModalFooter disableTypography={true} >
      <Button onClick={Handler} color="primary" >
        Agree
      </Button>
      <Button onClick={Handler} color="primary">
        Disagree
      </Button>
    </ModalFooter>

  );
});