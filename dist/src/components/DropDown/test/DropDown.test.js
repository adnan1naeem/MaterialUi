"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('it should show normal dropDown', () => {
    const DropdownList = enzyme_1.shallow(react_1.default.createElement(__1.Dropdown, { value: 'jsbha' }));
    expect(DropdownList.props().value).toEqual('jsbha');
});
test('it should show dropdown with autoWidth true', () => {
    const DropdownList = enzyme_1.shallow(react_1.default.createElement(__1.Dropdown, { autoWidth: true }));
    expect(DropdownList.props().autoWidth).toEqual(true);
});
test('it should  disable dropdown with true prop', () => {
    const DropdownList = enzyme_1.shallow(react_1.default.createElement(__1.Dropdown, { disabled: true }));
    expect(DropdownList.props().disabled).toEqual(true);
});
test('it should  disable dropdown with true prop', () => {
    const DropdownList = enzyme_1.shallow(react_1.default.createElement(__1.Dropdown, { disabled: true }));
    expect(DropdownList.props().disabled).toEqual(true);
});
test('it should add multiple items with this props', () => {
    const DropdownList = enzyme_1.shallow(react_1.default.createElement(__1.Dropdown, { multiple: true }));
    expect(DropdownList.props().multiple).toEqual(true);
});
//# sourceMappingURL=DropDown.test.js.map