"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
require("jest");
const index_1 = require("../index");
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('Slider has  max prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.Slider, { max: 20 }));
    expect(notification.props().max).toEqual(20);
});
test('Slider has  min prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.Slider, { min: 0 }));
    expect(notification.props().min).toEqual(0);
});
test('Slider has  disabled prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.Slider, { disabled: true }));
    expect(notification.props().disabled).toEqual(true);
});
test('Slider has  vertical prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.Slider, { vertical: true }));
    expect(notification.props().vertical).toEqual(true);
});
//# sourceMappingURL=Slider.test.js.map