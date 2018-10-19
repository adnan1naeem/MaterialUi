"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const Subtitle1_component_1 = __importDefault(require("../Subtitle1.component"));
const stories = react_1.storiesOf('Typography - Subtitle1', module);
stories.add('Component Subtitle1', () => {
    return (react_2.default.createElement(Subtitle1_component_1.default, null, "This is Subtitle1 typography"));
});
//# sourceMappingURL=Subtitle1.stories.js.map