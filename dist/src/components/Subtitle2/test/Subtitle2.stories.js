"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const Subtitle2_component_1 = __importDefault(require("../Subtitle2.component"));
const stories = react_1.storiesOf('Typography - Subtitle2', module);
stories.add('Component Subtitle2', () => {
    return (react_2.default.createElement(Subtitle2_component_1.default, null, "This is Subtitle2 typography"));
});
//# sourceMappingURL=Subtitle2.stories.js.map