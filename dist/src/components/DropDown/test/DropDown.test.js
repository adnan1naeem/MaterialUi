"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_1 = __importDefault(require("react"));
test('it should show normal dropDown', () => {
    const DropdownList = react_test_renderer_1.default.create(react_1.default.createElement(__1.Dropdown, { value: 'jsbha' })).toJSON();
    expect(DropdownList.props.autoWidth).toEqual(undefined);
    expect(DropdownList).toMatchSnapshot();
});
test('with color prop', () => {
    const DropdownList = react_test_renderer_1.default.create(react_1.default.createElement(__1.Dropdown, { value: 'jsbha' })).toJSON();
    expect(DropdownList.props.style).toEqual(undefined);
    expect(DropdownList).toMatchSnapshot();
});
test('with onSelelct prop', () => {
    const DropdownList = react_test_renderer_1.default.create(react_1.default.createElement(__1.Dropdown, { value: 'jsbha' })).toJSON();
    expect(DropdownList.props.onSelelct).toEqual(undefined);
    expect(DropdownList).toMatchSnapshot();
});
// test('with DropDownItem ', () => {
// 	const DropdownListItem = renderer.create(
//         <Dropdown  value={'jsbha'}   >
// 	<DropdownItem value={'jsbha'}>Hello</DropdownItem>
// 	</Dropdown>
// 	).toJSON();
// 	console.log(DropdownListItem.props);
// 	expect(DropdownListItem.style).toEqual(undefined);
// 	expect(DropdownListItem).toMatchSnapshot();
// });
test('with onfocus ', () => {
    const DropdownListItem = react_test_renderer_1.default.create(react_1.default.createElement(__1.Dropdown, { value: 'jsbha' })).toJSON();
    console.log(DropdownListItem.props);
    expect(DropdownListItem).toEqual(undefined);
    expect(DropdownListItem).toMatchSnapshot();
});
//# sourceMappingURL=DropDown.test.js.map