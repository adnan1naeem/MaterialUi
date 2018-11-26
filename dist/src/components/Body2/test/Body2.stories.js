"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Body2_component_1 = __importDefault(require("../Body2.component"));
const stories = react_1.storiesOf('Typography  Body 2', module);
stories.addDecorator(addon_knobs_1.withKnobs).add('Component Body2', () => {
    return (react_2.default.createElement(Body2_component_1.default, { style: { color: 'blue' } }, addon_knobs_1.text('Body2Content', 'This is Body2 typography')));
});
//# sourceMappingURL=Body2.stories.js.map