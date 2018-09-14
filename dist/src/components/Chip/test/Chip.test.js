"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_1 = __importDefault(require("react"));
test('Chip component with default values', () => {
    const chip = react_test_renderer_1.default.create(react_1.default.createElement(__1.Chip, null, "10 % off")).toJSON();
    expect(chip.props.style).toEqual(undefined);
    expect(chip).toMatchSnapshot();
});
test('Chip component with style', () => {
    const chip = react_test_renderer_1.default.create(react_1.default.createElement(__1.Chip, { style: { 'background-color': 'green' } }, "10 % off")).toJSON();
    expect(chip.props.style).toEqual({ 'background-color': 'green' });
    expect(chip).toMatchSnapshot();
});
//# sourceMappingURL=Chip.test.js.map