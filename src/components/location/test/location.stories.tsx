import React from 'react';
import { storiesOf } from '@storybook/react';
import {  text, number } from '@storybook/addon-knobs';
import BR, { BlueRainProvider } from '@blueeast/bluerain-os';
import { IntlProvider } from 'react-intl';
import Location from '../index';
const stories = storiesOf('Location', module);
BR.boot({ renderApp:false });

stories.add('Location (withKnobs)', () => {
    const enableHighAccuracy = text('enableHighAccuracy', true);
    const timeout = number('timeout', 3000);
    const maximumAge = number('maximumAge', 3000);
    return (<BlueRainProvider><IntlProvider><Location
        height={'600px'}
        id="my_map"
        region={{ latitude: 31.3892751, longitude: 74.1502481 }}
        zoom={12}


    /></IntlProvider></BlueRainProvider>);
});