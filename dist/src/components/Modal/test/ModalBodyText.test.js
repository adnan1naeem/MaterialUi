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
test('ModalBodyText has prop maxWidth', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.ModalBodyText, null, "\"footer\""));
    expect(notification.props().children).toBeDefined();
});
test('ModalBodyText has prop style', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(index_1.ModalBodyText, { style: {
            color: 'gree'
        } }));
    expect(notification.props().style).toBeDefined();
});
//# sourceMappingURL=ModalBodyText.test.js.map