"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const _1 = require("../");
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
require("jest");
function handleTextInputChange() {
    console.log('I am clicked');
}
test('Switch component with no props', () => {
    const switchComponent = enzyme_1.shallow(react_1.default.createElement(_1.Switch, { checked: true }));
    console.log(switchComponent.props, ' hhhhhh');
    expect(switchComponent.props().checked).toBe(true);
    expect(switchComponent).toMatchSnapshot();
});
//# sourceMappingURL=Switch.test.js.map