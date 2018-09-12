"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
// import {  object, text } from '@storybook/addon-knobs';
const Chip_1 = require("../../Chip");
const addon_actions_1 = require("@storybook/addon-actions");
const colorManipulator_1 = require("material-ui/styles/colorManipulator");
const react_1 = require("@storybook/react");
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const color = colorManipulator_1.emphasize('#fff', 0);
const backgroundColor = colorManipulator_1.emphasize('#0f0', 0);
const chipDefaultStyle = { 'background-color': backgroundColor, 'color': color };
const stories = react_1.storiesOf('Chip', module);
stories.add('Chip with default value', () => {
    return React.createElement(Chip_1.Chip, null, "12 % off");
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Chip with style', () => {
    const style = addon_knobs_1.object('Style of Chip', chipDefaultStyle);
    const content = addon_knobs_1.text('Text', '10 % off');
    return React.createElement(Chip_1.Chip, { style: style },
        React.createElement(bluerain_os_1.default.Components.Text, null, content));
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Chip Onclick', () => {
    const style = addon_knobs_1.object('Style of Chip', chipDefaultStyle);
    const content = addon_knobs_1.text('Text', '10 % off');
    return React.createElement(Chip_1.Chip, { style: style, onClick: addon_actions_1.action('Chip clicked') }, content);
});
stories.add('Chip without knobs', () => {
    return React.createElement(Chip_1.Chip, { style: chipDefaultStyle }, "10 % off");
});
//# sourceMappingURL=Chip.stories.js.map