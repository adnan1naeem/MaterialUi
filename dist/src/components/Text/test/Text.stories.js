"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const Text_component_1 = __importDefault(require("../Text.component"));
const stories = react_1.storiesOf('Typography - Text Component', module);
stories.add('Component Text with variant="body1"', () => {
    return (react_2.default.createElement(Text_component_1.default, null, "This is Body1 typography"));
}).add('Component Text with variant="body2"', () => {
    return (react_2.default.createElement(Text_component_1.default, { variant: "body2" }, "This is Body2 typography"));
});
//# sourceMappingURL=Text.stories.js.map