"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_1 = __importDefault(require("react"));
test('render correctly', () => {
    const textInput = react_test_renderer_1.default.create(react_1.default.createElement(__1.Stepper, { type: "progress", activeStep: 3, steps: 6 })).toJSON();
    expect(textInput).toBeDefined();
    expect(textInput).toMatchSnapshot();
});
//# sourceMappingURL=Stepper.test.js.map