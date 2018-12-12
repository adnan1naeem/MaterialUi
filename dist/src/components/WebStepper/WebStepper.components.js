"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Step_1 = __importDefault(require("@material-ui/core/Step"));
const StepLabel_1 = __importDefault(require("@material-ui/core/StepLabel"));
const Stepper_1 = __importDefault(require("@material-ui/core/Stepper"));
exports.WebStepper = (props) => {
    console.log('props.steps', props.steps);
    return (react_1.default.createElement(Stepper_1.default, Object.assign({}, props), props.steps.map((label) => {
        return (react_1.default.createElement(Step_1.default, { key: label },
            react_1.default.createElement(StepLabel_1.default, null, label)));
    })));
};
//# sourceMappingURL=WebStepper.components.js.map