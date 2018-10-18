"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('CardMedia component with src props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardMedia, { src: "" }));
    expect(wrapper.props().src).toBeDefined();
});
test('CardHeader component with children props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardHeader, { style: { color: 'red' } }));
    expect(wrapper.props().style).toBeDefined();
});
//# sourceMappingURL=CardMedia.test.js.map