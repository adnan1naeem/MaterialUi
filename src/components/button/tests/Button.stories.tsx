import * as React from 'react';
import Button from '../';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';
import './styles.css';

const background = '.background {background-color: red;}';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');
const label = text('label as child', 'with knobs');
const disabled = boolean('disabled', false);
const fullWidth = boolean('fullWidth', false);
const fab = boolean('fab', false);
const small = boolean('small', false);
storiesOf('Button', module).add('Primary Button with knobs', () =>

<<<<<<< HEAD:src/components/Button/tests/Button.stories.tsx
<Button color={'primary'} onClick={action('I was clicked with knobs')} disabled={disabled} fullWidth={fullWidth} fab={fab} small={small}>{label}</Button>);
storiesOf('Button', module).add('Default Button without Text tag in Child', () => <Button color={'default'}>Default</Button>);

storiesOf('Button', module).add('Accent Button with style prop', () => <Button color="accent" style={{backgroundColor:'purple', borderColor:'purple'}} >Custom Purple</Button>);
=======
storiesOf('Button', module).add('Primary button with label in Child', () => <Button color="primary"><Text>Dark</Text></Button>);

storiesOf('Button', module).add('Default button without Text tag in Child', () => <Button color="default">Default</Button>);

storiesOf('Button', module).add('Accent button with style prop', () => <Button color="accent" style={{backgroundColor:'purple', borderColor:'purple'}} >Customm Purple</Button>);
>>>>>>> 21ea88d0d7d8986e26a05db50d3342709b1e063f:src/components/button/tests/Button.stories.tsx

storiesOf('Button', module).add('Inherit button with onClick prop', () => <Button color="inherit" onClick={()=>{console.log('I was clicked');}} >onClick</Button>);

storiesOf('Button', module).add('Contrast button with disabled prop true', () => <Button color="contrast" disabled >Disabled</Button>);

storiesOf('Button', module).add('Accent button with href prop', () => <Button color="accent" href="https://www.facebook.com" >href</Button>);

storiesOf('Button', module).add('Primary button with onClick prop', () => <Button color="primary" fullWidth>FullWidth</Button>);

storiesOf('Button', module).add('Contrast button with active prop true', () => <Button color="contrast" active>Active</Button>);

storiesOf('Button', module).add('Accent button with bordered prop true', () => <Button color="accent" bordered>Bordered</Button>);

<<<<<<< HEAD:src/components/Button/tests/Button.stories.tsx
storiesOf('Button', module).add('Accent Rounded Button ', () => <Button color="accent">Rounded</Button>);
=======
storiesOf('Button', module).add('Link button ', () => <Button color="link" >Link</Button>);

storiesOf('Button', module).add('Accent Rounded button ', () => <Button color="accent">Rounded</Button>);
>>>>>>> 21ea88d0d7d8986e26a05db50d3342709b1e063f:src/components/button/tests/Button.stories.tsx

storiesOf('Button', module).add('Primary button with iconLeft prop', () => <Button color="primary" iconLeft={<img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="15" height="15"/>} >Icon Left</Button>);

storiesOf('Button', module).add('Contrast button with iconRight prop', () => <Button color="contrast" iconRight={<img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="15" height="15"/>} >Icon Right</Button>);

storiesOf('Button', module).add('Primary button with fab prop', () => <Button color="primary" fab>FAB</Button>);

storiesOf('Button', module).add('Primary button with fab prop and small prop', () => <Button color="primary" fab small>sm</Button>);

storiesOf('Button', module).add('Accent button with large prop true', () => <Button color="accent" large>Large</Button>);

<<<<<<< HEAD:src/components/Button/tests/Button.stories.tsx
storiesOf('Button', module).add('Default Button with small prop true', () => <Button color="default" small className="background">Small</Button>);


=======
storiesOf('Button', module).add('Default button with small prop true', () => <Button color="default" small>Small</Button>);
>>>>>>> 21ea88d0d7d8986e26a05db50d3342709b1e063f:src/components/button/tests/Button.stories.tsx
