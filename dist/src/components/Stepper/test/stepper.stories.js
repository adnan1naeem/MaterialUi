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
const KeyboardArrowLeft_1 = __importDefault(require("@material-ui/icons/KeyboardArrowLeft"));
const KeyboardArrowRight_1 = __importDefault(require("@material-ui/icons/KeyboardArrowRight"));
const Stepper_components_1 = require("../Stepper.components");
const react_1 = require("@storybook/react");
const stories = react_1.storiesOf('Stepper', module);
const backButton = React.createElement(Button_1.default, null,
    React.createElement(KeyboardArrowLeft_1.default, null),
    "Back");
const NextButton = React.createElement(Button_1.default, null,
    "Next ",
    React.createElement(KeyboardArrowRight_1.default, null));
stories.add('Stepper progresss', () => {
    return (React.createElement(Stepper_components_1.Stepper, { position: "static", variant: "progress", activeStep: 3, backButton: backButton, nextButton: NextButton, steps: 6 }));
});
stories.add('Stepper dot', () => {
    return (React.createElement(Stepper_components_1.Stepper, { position: "bottom", variant: "dots", activeStep: 3, backButton: backButton, nextButton: NextButton, steps: 6 }));
});
stories.add('Stepper  text', () => {
    return (React.createElement(Stepper_components_1.Stepper, { position: "top", variant: "text", activeStep: 3, backButton: backButton, nextButton: NextButton, steps: 6 }));
});
//# sourceMappingURL=stepper.stories.js.map