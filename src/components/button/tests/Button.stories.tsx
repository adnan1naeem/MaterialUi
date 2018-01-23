import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Button from '../';
import React from 'react';

const background = '.background {background-color: red;}';

BR.boot({ renderApp:false });

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');
const label = text('label as child', 'with knobs');
const disabled = boolean('disabled', false);
const fullWidth = boolean('fullWidth', false);
const fab = boolean('fab', false);
const small = boolean('small', false);
storiesOf('Button', module).add('Primary Button with knobs', () =>

<Button color={'primary'} onClick={action('I was clicked with knobs')} disabled={disabled} fullWidth={fullWidth} fab={fab} small={small}>{label}</Button>);
storiesOf('Button', module).add('Default Button without Text tag in Child', () => <Button color={'default'}>Default</Button>);

storiesOf('Button', module).add('Accent Button with style prop', () => <Button color="accent" style={{ backgroundColor:'purple', borderColor:'purple' }} >Custom Purple</Button>);

storiesOf('Button', module).add('Inherit button with onClick prop', () => <Button color="inherit" onClick={()=>{console.log('I was clicked');}} >onClick</Button>);

storiesOf('Button', module).add('Contrast button with disabled prop true', () => <Button color="contrast" disabled >Disabled</Button>);

storiesOf('Button', module).add('Accent button with href prop', () => <Button color="accent" href="https://www.facebook.com" >href</Button>);

storiesOf('Button', module).add('Primary button with onClick prop', () => <Button color="primary" fullWidth>FullWidth</Button>);

storiesOf('Button', module).add('Contrast button with active prop true', () => <Button color="contrast" active>Active</Button>);

storiesOf('Button', module).add('Accent button with bordered prop true', () => <Button color="accent" bordered>Bordered</Button>);

storiesOf('Button', module).add('Accent Rounded Button ', () => <Button color="accent">Rounded</Button>);

storiesOf('Button', module).add('Primary button with iconLeft prop', () => <Button color="primary" iconLeft={<img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="15" height="15"/>} >Icon Left</Button>);

storiesOf('Button', module).add('Contrast button with iconRight prop', () => <Button color="contrast" iconRight={<img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="15" height="15"/>} >Icon Right</Button>);

storiesOf('Button', module).add('Primary button with fab prop', () => <Button color="primary" fab>FAB</Button>);

storiesOf('Button', module).add('Primary button with fab prop and small prop', () => <Button color="primary" fab small>sm</Button>);

storiesOf('Button', module).add('Accent button with large prop true', () => <Button color="accent" large>Large</Button>);

storiesOf('Button', module).add('Default button with small prop true', () => <Button color="default" small>Small</Button>);
