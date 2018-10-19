"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const H6_component_1 = __importDefault(require("../H6.component"));
const stories = react_1.storiesOf('Typography - H6', module);
stories.add('Component H6', () => {
    return (react_2.default.createElement(H6_component_1.default, null, "This is H6 typography"));
});
//# sourceMappingURL=H6.stories.js.map