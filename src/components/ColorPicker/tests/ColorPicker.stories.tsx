import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import ColorPicker from '../../ColorPicker';
const Text = BR.Components.get('Text');
const rgbaAndHsl = { r:255, g:247, b: 109, a:100, h: 180, s: 0.5, l: 0.5 };
const hsl = { h: 180, s: 0.5, l: 0.5 };

function handleTextInputChange () {
   console.log('ColorPicker value changed');
}

storiesOf('ColorPicker', module).add('all Props',
    () => <ColorPicker value={rgbaAndHsl} hs={true} onChange={handleTextInputChange} label={'Picker'}  /> ) ;


storiesOf('Checkbox', module).add('with hsl value',
() => <ColorPicker value={hsl} hs /> ) ;


storiesOf('Checkbox', module).add('with # code',
() => <ColorPicker value="#2AF795" hs={false}/>) ;

storiesOf('Checkbox', module).add('with violet as value',
() => <ColorPicker value="violet" hs={false}/> ) ;