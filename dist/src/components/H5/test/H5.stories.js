"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const H5_component_1 = __importDefault(require("../H5.component"));
const stories = react_1.storiesOf('Typography - H5', module);
stories.add('Component H5', () => {
    return (react_2.default.createElement(H5_component_1.default, null, "This is H5 typography"));
});
//# sourceMappingURL=H5.stories.js.map