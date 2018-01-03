import * as React from 'react';
import Button from '../../Button';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import './styles.css';

const background = '.background {background-color: red;}';

BR.boot({renderApp:false})

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

storiesOf('Button', module).add('Primary Button with label in Child', () => <Button color="primary"><Text>Dark</Text></Button>);

storiesOf('Button', module).add('Default Button without Text tag in Child', () => <Button color="default">Default</Button>);

storiesOf('Button', module).add('Accent Button with style prop', () => <Button color="accent" style={{backgroundColor:'purple', borderColor:'purple'}} >Customm Purple</Button>);

storiesOf('Button', module).add('Inherit Button with onClick prop', () => <Button color="inherit" onClick={()=>{console.log('I was clicked')}} >onClick</Button>);

storiesOf('Button', module).add('Contrast Button with disabled prop true', () => <Button color="contrast" disabled >Disabled</Button>);

storiesOf('Button', module).add('Accent Button with href prop', () => <Button color="accent" href="https://www.facebook.com" >href</Button>);

storiesOf('Button', module).add('Primary Button with onClick prop', () => <Button color="primary" fullWidth>FullWidth</Button>);

storiesOf('Button', module).add('Contrast Button with active prop true', () => <Button color="contrast" active>Active</Button>);

storiesOf('Button', module).add('Accent Button with bordered prop true', () => <Button color="accent" bordered>Bordered</Button>);

storiesOf('Button', module).add('Accent Rounded Button ', () => <Button color="accent">Rounded</Button>);

storiesOf('Button', module).add('Primary Button with iconLeft prop', () => <Button color="primary" iconLeft={<img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="15" height="15"/>} >Icon Left</Button>);

storiesOf('Button', module).add('Contrast Button with iconRight prop', () => <Button color="contrast" iconRight={<img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="15" height="15"/>} >Icon Right</Button>);

storiesOf('Button', module).add('Primary Button with fab prop', () => <Button color="primary" fab>FAB</Button>);

storiesOf('Button', module).add('Primary Button with fab prop and small prop', () => <Button color="primary" fab small>sm</Button>);

storiesOf('Button', module).add('Accent Button with large prop true', () => <Button color="accent" large>Large</Button>);

storiesOf('Button', module).add('Default Button with small prop true', () => <Button color="default" small className="background">Small</Button>);


