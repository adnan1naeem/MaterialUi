"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Switch_component_1 = __importDefault(require("../Switch.component"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
require("jest");
function handleTextInputChange() {
    console.log('I am clicked');
}
test('Switch component with checked props', () => {
    const switchComponent = enzyme_1.shallow(react_1.default.createElement(Switch_component_1.default, { checked: true }));
    console.log(switchComponent.props, 'checked');
    expect(switchComponent.props().checked).toBe(true);
});
test('Switch component with color props', () => {
    const switchComponent = enzyme_1.shallow(react_1.default.createElement(Switch_component_1.default, { color: "primary" }));
    console.log(switchComponent.props, 'checked');
    expect(switchComponent.props().color).toEqual('primary');
});
test('Switch component with disabled props', () => {
    const switchComponent = enzyme_1.shallow(react_1.default.createElement(Switch_component_1.default, { disabled: true }));
    console.log(switchComponent.props, 'checked');
    expect(switchComponent.props().disabled).toEqual(true);
});
test('Switch component with disableRipple props', () => {
    const switchComponent = enzyme_1.shallow(react_1.default.createElement(Switch_component_1.default, { disableRipple: false }));
    console.log(switchComponent.props, 'checked');
    expect(switchComponent.props().disableRipple).toEqual(false);
});
test('Switch component with checked props', () => {
    const switchComponent = enzyme_1.shallow(react_1.default.createElement(Switch_component_1.default, { checkedIcon: true }));
    console.log(switchComponent.props, 'checked');
    expect(switchComponent.props().checkedIcon).toEqual(true);
});
//# sourceMappingURL=Switch.test.js.map