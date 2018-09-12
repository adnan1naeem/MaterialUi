import * as React from 'react';
import { boolean ,text, withKnobs} from'@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Checkbox from '../../Checkbox';

storiesOf('Checkbox', module).addDecorator(withKnobs).add('label disabled value props with knobs',
    () => <Checkbox label={text('Label','Label Chekbox')} color="default" disabled={boolean('Disable',false)} value={true} onChange={()=> action('i was presse')} /> ) ;


storiesOf('Checkbox', module).add('with onPress',
() => <Checkbox label="with onPress" color="contrast" value={true} onChange={()=>action('i was presse')} /> ) ;


storiesOf('Checkbox', module).add('with label as Node',
() => <Checkbox label={<BR.Components.Text>I am a text in Node</BR.Components.Text>} color="accent" /> ) ;

storiesOf('Checkbox', module).add('with indeterminate',
() => <Checkbox label={<BR.Components.Text>I am a text in Node</BR.Components.Text>}  color="primary" indeterminate/> ) ;