"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const H3_component_1 = __importDefault(require("../H3.component"));
const stories = react_1.storiesOf('Typography - H3', module);
stories.add('component H3', () => {
    return (react_2.default.createElement(H3_component_1.default, null, "This is H3 typography"));
});
//# sourceMappingURL=H3.stories.js.map