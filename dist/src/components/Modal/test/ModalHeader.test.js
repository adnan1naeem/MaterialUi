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
test('ModalHeader has prop maxWidth', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.ModalHeader, null, "\"footer\""));
    expect(notification.props().children).toBeDefined();
});
test('ModalHeader has prop style', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.ModalHeader, { style: { color: 'green' } }));
    expect(notification.props().style).toBeDefined();
});
//# sourceMappingURL=ModalHeader.test.js.map