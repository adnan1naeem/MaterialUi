"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("@storybook/react");
const ModalBodyText_component_1 = __importDefault(require("../ModalBodyText.component"));
const stories = react_1.storiesOf('ModalBodyText', module);
stories.add('ModalBodyText', () => {
    return (React.createElement(ModalBodyText_component_1.default, null, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."));
});
stories.add('ModalBody taking text as a children prop', () => {
    return (React.createElement(ModalBodyText_component_1.default, null, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."));
});
stories.add('ModalBody  styling', () => {
    return (React.createElement(ModalBodyText_component_1.default, { classes: { color: 'red' } }, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."));
});
//# sourceMappingURL=ModalBodyText.stories.js.map