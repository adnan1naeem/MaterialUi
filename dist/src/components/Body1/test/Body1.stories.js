"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_2 = __importDefault(require("react"));
const Body1_component_1 = __importDefault(require("../Body1.component"));
const stories = react_1.storiesOf('Typography - Body', module);
stories.addDecorator(addon_knobs_1.withKnobs).add('Component Body1', () => {
    return (react_2.default.createElement(Body1_component_1.default, { style: { color: 'blue' } }, addon_knobs_1.text('content', 'This is Body1 typography')));
});
//# sourceMappingURL=Body1.stories.js.map