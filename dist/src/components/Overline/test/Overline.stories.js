"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const Overline_component_1 = __importDefault(require("../Overline.component"));
const stories = react_1.storiesOf('Typography - Overline', module);
stories.add('Component Overline', () => {
    return (react_2.default.createElement(Overline_component_1.default, null, "This is overline typography"));
});
//# sourceMappingURL=Overline.stories.js.map