"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const __1 = __importDefault(require("../"));
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('when title prop is passed', () => {
    const checkbox = enzyme_1.shallow(react_1.default.createElement(__1.default, { label: "hello" }));
    expect(checkbox.props().label).toBeUndefined();
});
test('when checked prop is passed', () => {
    const checkbox = enzyme_1.shallow(react_1.default.createElement(__1.default, { value: false }));
    expect(checkbox.props().value).toBeFalsy();
    expect(checkbox).toMatchSnapshot();
});
//# sourceMappingURL=Checkbox.test.js.map