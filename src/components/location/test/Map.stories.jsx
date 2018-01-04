"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var bluerain_os_1 = require("@blueeast/bluerain-os");
var react_intl_1 = require("react-intl");
var index_1 = require("../index");
var stories = react_2.storiesOf('Map', module);
bluerain_os_1.default.boot({ renderApp: false });
var onDragEnd = function (e) {
    console.log('onDragEnd', e);
};
stories.add('Map (withKnobs)', function () {
    var draggable = addon_knobs_1.boolean('draggable', false);
    var zoom = addon_knobs_1.number('zoom', 12);
    var height = addon_knobs_1.text('height', '500px');
    var width = addon_knobs_1.text('width', '100%');
    return (<bluerain_os_1.BlueRainProvider>
            <react_intl_1.IntlProvider>
                <index_1.default draggable={draggable} zoom={zoom} height={height} width={width} onMarkerDragEnd={onDragEnd} region={{ latitude: 31.3892751, longitude: 74.1502481 }}/>
            </react_intl_1.IntlProvider>
        </bluerain_os_1.BlueRainProvider>);
});
