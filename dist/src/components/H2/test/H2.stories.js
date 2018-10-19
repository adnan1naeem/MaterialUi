"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const H2_component_1 = __importDefault(require("../H2.component"));
const stories = react_1.storiesOf('Typography - H2', module);
stories.add('H2 compopnent', () => {
    return (react_2.default.createElement(H2_component_1.default, null, "This is H2 typography"));
});
//# sourceMappingURL=H2.stories.js.map