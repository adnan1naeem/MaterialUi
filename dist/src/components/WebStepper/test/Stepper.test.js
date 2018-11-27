"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stepper_components_1 = require("../Stepper.components");
const enzyme_1 = require("enzyme");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
const react_1 = __importDefault(require("react"));
test('render correctly', () => {
    const wrapper = enzyme_1.mount(react_1.default.createElement(Stepper_components_1.WebStepper, { type: "progress", activeStep: 3, steps: ['label'] }));
    expect(wrapper.props().type).toEqual('progress');
});
//# sourceMappingURL=Stepper.test.js.map