"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('ColorPicker with hs true', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.ColorPicker, { hs: false, value: { h: 120, s: 1, l: 0.5 } }));
    expect(wrapper.props().hs).toBeFalsy();
});
//# sourceMappingURL=ColorPicker.test.js.map