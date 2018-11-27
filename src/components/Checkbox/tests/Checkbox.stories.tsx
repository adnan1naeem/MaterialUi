import * as React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import { Checkbox } from '../../Checkbox';
import BlueRainCheckbox from './Checkboxtest';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

storiesOf('Checkbox', module).addDecorator(withKnobs).add('label disabled value props with knobs',
    () => <Checkbox
        color="primary"
        disabled={boolean('Disable', false)}
        onChange={() => action('i was presse')} />
);

storiesOf('Checkbox', module).add('with onPress',
    () => <Checkbox color="secondary"
        onPress={action('check changed')} />);


storiesOf('Checkbox', module).add('with label as Node',
    () => <Checkbox label={<BR.Components.Link to={'/'}
        target="_blank"
        style={{ textDecoration: 'none', color: '#868686', fontWeight: 'bold' }}>
        <BR.Components.Text>
            Hello
    </BR.Components.Text>
    </BR.Components.Link>}
        color="secondary" />);

storiesOf('Checkbox', module).add('with indeterminate',
    () => <Checkbox color="primary" indeterminate />);

storiesOf('Checkbox', module).add('with example',
    () => <BlueRainCheckbox />);

storiesOf('Checkbox', module).add('Custom icon and checkedicon',
    () => <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        testID="checkedH"
        label="Custom icon"
    />);

storiesOf('Checkbox', module).add('Custom icon and checkedIcon with size',
    () => <Checkbox
        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
        checkedIcon={<CheckBoxIcon fontSize="small" />}
        testID="checkedI"
        label="Custom size"
    />);