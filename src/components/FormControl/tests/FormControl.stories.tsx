import * as React from 'react';
import { FormControl, FormGroup } from '../../FormControl';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { FormControlLabel } from 'material-ui/Form';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Button from '../../Button';
import Checkbox from 'material-ui/Checkbox';
import Input from '../../TextInput';
import Paper from 'material-ui/Paper';

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const View = BR.Components.get('View');

storiesOf('FormControl', module).add('FormControl with style and raised props', () => (
<FormControl
    style={{ width:'100%', height:300 }}
    className="bg-main"
>
Raised
</FormControl>));

storiesOf('FormControl', module).add('MaterialUI example 1', () =>
(
  <Paper style={{ padding:20 }}>
<FormControl fullWidth >
<Input
  label="amount"
  id="adornment-amount"
/>
</FormControl>
</Paper>));

storiesOf('FormControl', module).add('MaterialUI example 2', () =>
(
  <Paper style={{ padding:20 }}>
<FormControl>
    <FormGroup>
    <Input label="Input with success"/>
    <Text>Example help text that remains unchanged.</Text>
    </FormGroup>
    <FormGroup>
    <Input label="Input with danger" error={true} errorText={'Example help text that remains unchanged.'}/>
    </FormGroup>
</FormControl>
</Paper>));



storiesOf('FormControl', module).add('MaterialUI example 3', () =>
(
  <Paper style={{ padding:20 }}>
<FormGroup row={true}>
<FormControlLabel
  control={
    <Checkbox
      value="checkedA"
    />
  }
  label="Option A"
/>
<FormControlLabel
  control={
    <Checkbox
      value="checkedB"
    />
  }
  label="Option B"
/>
<FormControlLabel control={<Checkbox value="checkedC" />} label="Option C" />
<FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
<FormControlLabel
  disabled
  control={<Checkbox checked value="checkedE" />}
  label="Disabled"
/>
<FormControlLabel
  control={
    <Checkbox
      value="checkedF"
      indeterminate
    />
  }
  label="Indeterminate"
/>
<FormControlLabel
  control={
    <Checkbox
      value="checkedG"
    />
  }
  label="Custom color"
/>
</FormGroup>
</Paper>));
