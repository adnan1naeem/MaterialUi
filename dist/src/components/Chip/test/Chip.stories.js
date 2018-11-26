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
const Chip_1 = require("../../Chip");
const Face_1 = __importDefault(require("@material-ui/icons/Face"));
const Done_1 = __importDefault(require("@material-ui/icons/Done"));
const Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
const addon_actions_1 = require("@storybook/addon-actions");
const react_1 = require("@storybook/react");
// import BR from '@blueeast/bluerain-os';
const chipDefaultStyle = { 'background-color': 'white', 'color': 'red' };
const stories = react_1.storiesOf('Chip', module);
stories.add('Chip with default value', () => {
    return React.createElement(Chip_1.Chip, { label: "Basic Chip" });
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Chip with style & clickable property', () => {
    const style = addon_knobs_1.object('Style of Chip', chipDefaultStyle);
    const content = addon_knobs_1.text('Text', '10 % off');
    const click = addon_knobs_1.boolean('boolean', false);
    return (React.createElement(Chip_1.Chip, { style: style, label: content, clickable: click }));
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Chip with OnClick', () => {
    const style = addon_knobs_1.object('Style of Chip', chipDefaultStyle);
    const content = addon_knobs_1.text('Text', 'Clickable Chip');
    return (React.createElement(Chip_1.Chip, { style: style, avatar: React.createElement(Avatar_1.default, null, "MB"), label: content, onClick: addon_actions_1.action('Chip clicked') }));
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Chip with onDelete', () => {
    const content = addon_knobs_1.text('Text', 'Clickable Deletable Chip');
    return (React.createElement(Chip_1.Chip, { icon: React.createElement(Face_1.default, null), label: content, onClick: addon_actions_1.action('Chip clicked'), onDelete: addon_actions_1.action('Chip on Delete'), deleteIcon: React.createElement(Done_1.default, null) }));
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Chip with Avatar', () => {
    const content = addon_knobs_1.text('Text', 'Deletable Secondary Chip');
    return (React.createElement(Chip_1.Chip, { avatar: React.createElement(Avatar_1.default, null,
            React.createElement(Face_1.default, null)), label: content, onDelete: addon_actions_1.action('Chip on Delete'), color: "secondary" }));
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Chip with Icon', () => {
    const content = addon_knobs_1.text('Text', 'Deletable Secondary Chip');
    return (React.createElement(Chip_1.Chip, { icon: React.createElement(Face_1.default, null), label: content, onDelete: addon_actions_1.action('Chip on Delete'), color: "secondary" }));
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Chip with Clickable', () => {
    const content = addon_knobs_1.text('Text', 'Deletable Secondary Chip');
    return (React.createElement(Chip_1.Chip, { icon: React.createElement(Face_1.default, null), label: content, onDelete: addon_actions_1.action('Chip on Delete'), color: "secondary" }));
});
//# sourceMappingURL=Chip.stories.js.map