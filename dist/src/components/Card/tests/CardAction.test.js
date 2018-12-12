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
test('CardAction component with children props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardAction, null, "Card"));
    expect(wrapper.props().children).toBeDefined();
});
test('CardAction component with children props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardAction, { style: { color: 'red' } }));
    expect(wrapper.props().style).toBeDefined();
});
//# sourceMappingURL=CardAction.test.js.map