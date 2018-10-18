"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
require("jest");
const __1 = require("../");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('render correctly', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.Modal, null,
        react_1.default.createElement(__1.ModalHeader, null, "UserLocation Service"),
        react_1.default.createElement(__1.ModalBody, null, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."),
        react_1.default.createElement(__1.ModalFooter, null,
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    ' ';
                }, color: "primary" }, "Disagree"),
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    ' ';
                }, color: "primary" }, "Agree"),
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    ' ';
                }, color: "primary" }, "Disagree"),
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    ' ';
                }, color: "primary" }, "Agree"))));
    expect(notification).toMatchSnapshot();
});
test('render correctly', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.Modal, null,
        react_1.default.createElement(__1.ModalHeader, null, "UserLocation Service"),
        react_1.default.createElement(__1.ModalBody, null, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."),
        react_1.default.createElement(__1.ModalFooter, null,
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    ' ';
                }, color: "primary" }, "Disagree"),
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    ' ';
                }, color: "primary" }, "Agree"),
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    ' ';
                }, color: "primary" }, "Disagree"),
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    ' ';
                }, color: "primary" }, "Agree"))));
    expect(notification).toMatchSnapshot();
});
test('Modal has prop fullScreen', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.Modal, { fullScreen: true }));
    expect(notification.props().fullScreen).toEqual(true);
});
test('Modal has prop maxWidth', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.Modal, { fullWidth: true, maxWidth: "xs" }));
    expect(notification.props().maxWidth).toEqual('xs');
});
test('Modal has prop fullScreen', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.Modal, { fullScreen: true }));
    expect(notification.props().fullScreen).toEqual(true);
});
//# sourceMappingURL=Modal.test.js.map