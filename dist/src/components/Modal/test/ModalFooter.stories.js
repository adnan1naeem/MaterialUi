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
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const react_1 = require("@storybook/react");
const ModalFooter_Component_1 = __importDefault(require("../ModalFooter.Component"));
const stories = react_1.storiesOf('ModalFooter', module);
const Handler = () => {
    alert('clicked');
};
stories.add('ModalFooter taking as a children prop', () => {
    return (React.createElement(ModalFooter_Component_1.default, null,
        React.createElement(Button_1.default, { onClick: Handler, color: "primary" }, "Agree"),
        React.createElement(Button_1.default, { onClick: Handler, color: "primary" }, "Disagree")));
});
stories.add('ModalFooter  disableTypography prop', () => {
    return (React.createElement(ModalFooter_Component_1.default, { disableTypography: true },
        React.createElement(Button_1.default, { onClick: Handler, color: "primary" }, "Agree"),
        React.createElement(Button_1.default, { onClick: Handler, color: "primary" }, "Disagree")));
});
//# sourceMappingURL=ModalFooter.stories.js.map