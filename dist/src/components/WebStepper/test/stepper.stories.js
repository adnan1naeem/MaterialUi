"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("@storybook/react");
const WebStepper_components_1 = require("../WebStepper.components");
const stories = react_1.storiesOf('WebStepper', module);
function getSteps() {
    return ['Select Device', 'Wifi Hotsopt', 'Wifi Network', 'Connect Device', 'Add Your Device'];
}
const steps = getSteps();
stories.add('Stepper progresss', () => {
    return (React.createElement(WebStepper_components_1.WebStepper, { variant: "progress", activeStep: 1, alternativeLabel: true, steps: steps }));
});
stories.add('Stepper dot', () => {
    return (React.createElement(WebStepper_components_1.WebStepper, { variant: "progress", activeStep: 2, alternativeLabel: true, steps: steps }));
});
stories.add('Stepper  text', () => {
    return (React.createElement(WebStepper_components_1.WebStepper, { variant: "progress", activeStep: 3, alternativeLabel: true, steps: steps }));
});
//# sourceMappingURL=stepper.stories.js.map