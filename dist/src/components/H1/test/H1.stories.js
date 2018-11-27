"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const H1_component_1 = __importDefault(require("../H1.component"));
const stories = react_1.storiesOf('Typography - H1', module);
stories.add('Component H1', () => {
    return (react_2.default.createElement(H1_component_1.default, { style: { color: 'red' } }, "This is H1 typography"));
});
//# sourceMappingURL=H1.stories.js.map