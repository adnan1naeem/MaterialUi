import * as React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Checkbox from '../../Checkbox';
import BlueRainCheckbox from './Checkboxtest';

storiesOf('Checkbox', module).addDecorator(withKnobs).add('label disabled value props with knobs',
    () => <Checkbox color="default" disabled={boolean('Disable', false)} value={true} onChange={() => action('i was presse')} />);

storiesOf('Checkbox', module).add('with onPress',
    () => <Checkbox color="contrast"
        onPress={action('check changed')} />);


storiesOf('Checkbox', module).add('with label as Node',
    () => <Checkbox label={<BR.Components.Link to={'/'} target="_blank"
        style={{ textDecoration: 'none', color: '#868686', fontWeight: 'bold' }}
    >
        <BR.Components.Text>
            Hello
    </BR.Components.Text>
    </BR.Components.Link>} color="accent" />);

storiesOf('Checkbox', module).add('with indeterminate',
    () => <Checkbox  color="primary" indeterminate />);

storiesOf('Checkbox', module).add('with example',
() => <BlueRainCheckbox />);