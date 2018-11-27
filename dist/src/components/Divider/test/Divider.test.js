"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const Divider_component_1 = __importDefault(require("../Divider.component"));
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('Divider component with light value props', () => {
    const divider = enzyme_1.shallow(react_1.default.createElement(Divider_component_1.default, { light: true }));
    expect(divider.props().light).toEqual(true);
});
test('Divider component with absolute  prop=true', () => {
    const divider = enzyme_1.shallow(react_1.default.createElement(Divider_component_1.default, { absolute: true }));
    expect(divider.props().absolute).toEqual(true);
});
test('Divider component with inset prop=true', () => {
    const divider = enzyme_1.shallow(react_1.default.createElement(Divider_component_1.default, { inset: true }));
    expect(divider.props().inset).toEqual(true);
});
test('Divider component with inset prop=false', () => {
    const divider = enzyme_1.shallow(react_1.default.createElement(Divider_component_1.default, { inset: false }));
    expect(divider.props().inset).toEqual(false);
});
test('Divider component with inset prop=false', () => {
    const divider = enzyme_1.shallow(react_1.default.createElement(Divider_component_1.default, { classes: {} }));
    expect(divider.props().classes).toEqual({});
});
//# sourceMappingURL=Divider.test.js.map