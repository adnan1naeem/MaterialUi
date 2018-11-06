"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
require("jest");
const __1 = require("../");
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('ModalFooter has prop maxWidth', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.ModalFooter, null, "\"footer\""));
    expect(notification.props().children).toBeDefined();
});
test('ModalFooter has prop fullScreen', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.ModalFooter, { fullScreen: true }));
    expect(notification.props().fullScreen).toEqual(true);
});
//# sourceMappingURL=ModalFooter.test.js.map