"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('Card component with children props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(__1.Card, null,
        react_1.default.createElement(__1.CardBody, null, "Card")));
    expect(wrapper.props().children).toBeDefined();
});
test('Card component with children props', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(__1.Card, { style: { color: 'red' } }));
    expect(wrapper.props().style).toBeDefined();
});
//# sourceMappingURL=Card.test.js.map