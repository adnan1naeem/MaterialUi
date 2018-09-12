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
const Button_1 = require("../../Button");
const react_1 = require("@storybook/react");
const ModalFooter_Component_1 = __importDefault(require("../ModalFooter.Component"));
const stories = react_1.storiesOf('Modal', module);
stories.add('ModalFooter', () => {
    const Handler = () => {
        alert('clicked');
    };
    return (React.createElement(ModalFooter_Component_1.default, null,
        React.createElement(Button_1.Button, { onPress: Handler, color: "primary" }, "Agree"),
        React.createElement(Button_1.Button, { onPress: Handler, color: "primary" }, "Disagree")));
});
//# sourceMappingURL=ModalFooter.stories.js.map