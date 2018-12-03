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
test('Menu has  children prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.Menu, { open: true }, "\"Hello\""));
    expect(notification.props().children).toBeDefined();
});
test('Menu has  open prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.Menu, { open: true }, "\"Hello\""));
    expect(notification.props().open).toEqual(true);
});
test('MenuItem should be disabled prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.MenuItem, { disabled: true }, "\"Hello\""));
    expect(notification.props().disabled).toEqual(true);
});
test('MenuItem should be disabled prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.MenuList, null, "\"Hello\""));
    expect(notification.props().children).toBeDefined();
});
test('MenuPopper should be children prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.MenuPopper, { open: true }, "\"Hello\""));
    expect(notification.props().open).toEqual(true);
});
test('MenuPopper should be children prop', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.MenuPopper, { open: true }, "\"Hello\""));
    expect(notification.props().children).toBeDefined();
});
//# sourceMappingURL=MenuComponents.test.js.map