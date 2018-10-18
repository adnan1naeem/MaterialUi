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
test('CardHeader component with children props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardHeader, null, "Header"));
    expect(wrapper.props().children).toBeDefined();
});
test('CardHeader component with children props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardHeader, { style: { color: 'red' } }));
    expect(wrapper.props().style).toBeDefined();
});
test('CardHeader component with content props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardHeader, { content: "Card" }));
    expect(wrapper.props().content).toEqual('Card');
});
test('CardHeader component with avatar props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardHeader, { title: "CardHeader" }));
    expect(wrapper.props().title).toEqual('CardHeader');
});
test('CardHeader component with disableTypography props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(_1.CardHeader, { disableTypography: false }));
    expect(wrapper.props().disableTypography).toEqual(false);
});
//# sourceMappingURL=CardHeader.test.js.map