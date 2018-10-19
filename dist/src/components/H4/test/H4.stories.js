"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const H4_component_1 = __importDefault(require("../H4.component"));
const stories = react_1.storiesOf('Typography - H4', module);
stories.add('Component H4', () => {
    return (react_2.default.createElement(H4_component_1.default, null, "This is H4 typography"));
});
//# sourceMappingURL=H4.stories.js.map