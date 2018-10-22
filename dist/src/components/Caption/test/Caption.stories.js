"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const Caption_component_1 = __importDefault(require("../Caption.component"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const stories = react_1.storiesOf('Typography - Caption', module);
stories.addDecorator(addon_knobs_1.withKnobs).add('Component Caption', () => {
    return (react_2.default.createElement(Caption_component_1.default, null, addon_knobs_1.text('Content', 'This is Caption typography')));
});
//# sourceMappingURL=Caption.stories.js.map