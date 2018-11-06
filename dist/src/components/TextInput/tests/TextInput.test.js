"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_1 = __importDefault(require("react"));
require("jest");
function handleTextInputChange() {
    console.log('I am clicked');
}
test('TextInput component with default values', () => {
    const textInput = react_test_renderer_1.default.create(react_1.default.createElement(__1.TextInput, { placeholder: "hello", defaultValue: "nooo", onChange: handleTextInputChange, autoComplete: "Hello World !!", autoFocus: true })).toJSON();
    expect(textInput.props.style).toEqual(undefined);
    expect(textInput).toMatchSnapshot();
});
test('TextInput component with editable true', () => {
    const textInput = react_test_renderer_1.default.create(react_1.default.createElement(__1.TextInput, { placeholder: "hello", editable: false, defaultValue: "nooo", onChange: handleTextInputChange, autoComplete: "Hello World !!", autoFocus: true })).toJSON();
    expect(textInput.props.editable).toBe(false);
    expect(textInput).toMatchSnapshot();
});
test('TextInput component with onChangeText', () => {
    const textInput = react_test_renderer_1.default.create(react_1.default.createElement(__1.TextInput, { placeholder: "hello", editable: false, defaultValue: "nooo", onChangeText: handleTextInputChange, autoComplete: "Hello World !!", autoFocus: true })).toJSON();
    expect(textInput.props.onChangeText).toEqual(undefined);
    expect(textInput).toMatchSnapshot();
});
//# sourceMappingURL=TextInput.test.js.map