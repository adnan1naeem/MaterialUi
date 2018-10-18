import * as React from 'react';
import { Button } from '../../Button';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import AddIcon from '@material-ui/icons/Add';
import BR from '@blueeast/bluerain-os';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

storiesOf('Button', module).addDecorator(withKnobs).add('Primary Button with knobs', () => {
  const label = text('label as child', 'withknobs');
  const disabled = boolean('disabled', false);
  const fullWidth = boolean('fullWidth', false);
  const fab = boolean('fab', false);
  const small = boolean('small', false);
  return (
    <Button
      // color={color}
      onPress={action('I was clicked with knobs')}
      disabled={disabled}
      fullWidth={fullWidth}
      fab={fab}
      small={small}
      variant={'contained'}
    >{label}
    </Button>);
});
storiesOf('Button', module).add('Default Button without Text tag in Child', () => <Button color={'default'}>Default</Button>);
storiesOf('Button', module).add('Default Button with title prop', () => <Button color={'default'} title="hero" />);

storiesOf('Button', module).add('Button with style prop', () => <Button color="primary" style={{ backgroundColor: 'purple', borderColor: 'purple' }} >Custom Purple</Button>);

storiesOf('Button', module).add('Button with onPress prop', () => <Button color="inherit" onPress={() => { console.log('I was pressed'); }} >onPress</Button>);

storiesOf('Button', module).add('Button with disabled prop true', () => <Button disabled >Disabled</Button>);

storiesOf('Button', module).add('Button with href prop', () => <Button href="https://www.facebook.com" >href</Button>);

storiesOf('Button', module).add('Primary Button with onPress prop', () => <Button variant={'contained'} color="primary" fullWidth>FullWidth</Button>);

storiesOf('Button', module).add('Button with active prop true', () => <Button active>Active</Button>);

storiesOf('Button', module).add('Accent button with bordered prop true', () => <Button bordered>Bordered</Button>);


storiesOf('Button', module).add('Primary button with iconLeft prop', () => <Button color="primary" iconLeft={<AddIcon />} >Icon Left</Button>);

storiesOf('Button', module).add('Transparent Button with icon as child', () => <Button style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 0 }} ><AddIcon /></Button>);

storiesOf('Button', module).add('Contrast button with iconRight prop', () => <Button color='primary' iconRight={<AddIcon />} >Icon Right</Button>);


storiesOf('Button', module).add('Primary button with round prop and small prop', () => <Button color="primary" rounded small>sm</Button>);

storiesOf('Button', module).add('Accent button with large prop true', () => <Button color="primary" variant={'contained'} large>Large</Button>);


storiesOf('Button', module).add('Text Buttons', () => {
  return (<BR.Components.View style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white' }}>
   <Button >Default</Button>
      <Button color="primary" >
        Primary
      </Button>
      <Button color="secondary" >
        Secondary
      </Button>
      <Button disabled >
        Disabled
      </Button>
      <Button href="#text-buttons" >
        Link
      </Button>
  </BR.Components.View>);

});
storiesOf('Button', module).add('Outlined Button', () => {
  return (<BR.Components.View style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white'}}>
   <Button variant="outlined" >
        Default
      </Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary" >
        Secondary
      </Button>
      <Button variant="outlined" disabled >
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons" >
        Link
      </Button>
  </BR.Components.View>);
});

storiesOf('Button', module).add('Contained Button', () => {
  return (<BR.Components.View style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white'}}>
    <Button variant="contained" >
        Default
      </Button>
      <Button variant="contained" color="primary" >
        Primary
      </Button>
      <Button variant="contained" color="secondary" >
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled >
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" >
        Link
      </Button>
  </BR.Components.View>);
});

storiesOf('Button', module).add('Floating Action Buttons', () => {
  return (<BR.Components.View style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white'}}>
    <Button variant="fab" color="primary" aria-label="Add" >
        <AddIcon />
      </Button>
      <Button variant="fab" color="secondary" aria-label="Edit" >
        <Icon>edit_icon</Icon>
      </Button>
      <Button variant="extendedFab" aria-label="Delete" >
        <NavigationIcon style={{marginRight:8}} />
        Extended
      </Button>
      <Button variant="fab" disabled aria-label="Delete">
        <DeleteIcon />
      </Button>
  </BR.Components.View>);
});

storiesOf('Button', module).add('Sizes Buttons', () => {
  return (<BR.Components.View style={{display:'flex',flexDirection:'column',backgroundColor:'white'}}>
       <BR.Components.View style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
       <Button size="small" >
          Small
        </Button>
        <Button size="medium">
          Medium
        </Button>
        <Button size="large">
          Large
        </Button>
  </BR.Components.View>
  <BR.Components.View style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
  <Button variant="outlined" size="small" color="primary" >
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" >
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" >
          Large
        </Button>
  </BR.Components.View>
  <BR.Components.View style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
  <Button variant="contained" size="small" color="primary" >
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary">
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" >
          Large
        </Button>
  </BR.Components.View>
  <BR.Components.View style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
  <Button variant="fab" mini color="secondary" aria-label="Add">
          <AddIcon />
        </Button>
        <Button variant="fab" color="secondary" aria-label="Add">
          <AddIcon />
        </Button>
  </BR.Components.View>
  </BR.Components.View>);
});