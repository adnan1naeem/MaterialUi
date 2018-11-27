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
test('Modal has prop maxWidth', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.ModalBody, { fullWidth: true, maxWidth: "xs" }));
    expect(notification.props().maxWidth).toEqual('xs');
});
test('Modal has prop fullScreen', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.ModalBody, { fullScreen: true }));
    expect(notification.props().fullScreen).toEqual(true);
});
//# sourceMappingURL=ModalBody.test.js.map