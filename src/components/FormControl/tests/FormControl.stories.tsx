import * as React from 'react';
import { FormControl, FormGroup } from '../../FormControl';
import { FormControlLabel } from 'material-ui/Form';
import { TextInput } from '../../TextInput';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';


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
<TextInput
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
    <TextInput label="Input with success"/>
    <BR.Components.Text>Example help text that remains unchanged.</BR.Components.Text>
    </FormGroup>
    <FormGroup>
    <TextInput label="Input with danger" error={true} errorText={'Example help text that remains unchanged.'}/>
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
