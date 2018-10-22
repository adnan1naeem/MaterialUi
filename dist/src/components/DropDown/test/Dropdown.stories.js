"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const Input_1 = __importDefault(require("@material-ui/core/Input"));
const react_1 = require("@storybook/react");
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const react_2 = __importDefault(require("react"));
const DemoDropdownComponent_1 = __importDefault(require("./DemoDropdownComponent"));
const stories = react_1.storiesOf('Dropdown', module);
let values;
const onChange = (event) => {
    console.log(event.target.value);
    values = event.target.value;
};
const style = { root: { padding: 20 }, dropdown: { width: 400 } };
const multiItems = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
];
stories.add(' Dropdown with onchange', () => {
    console.log('value', values);
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(DemoDropdownComponent_1.default, null)));
});
stories.add('Dropdown with auoWidth', () => {
    console.log('value', values);
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { onValueChange: onChange, value: values ? values : '1', autoWidth: true, style: style.dropdown },
            react_2.default.createElement(index_1.DropdownItem, { value: "1" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "2" }, "Item 2 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "3" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "4" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "5" }, "Item 5 "))));
});
stories.add('Dropdown with Override styles', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { onValueChange: onChange, value: 'xyz', style: { width: 600, backgroundColor: 'green' }, itemStyle: { backgroundColor: 'black' } },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 2 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown multiple select', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { onValueChange: onChange, value: multiItems, autoWidth: true, multiple: true, style: style.dropdown },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 2 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with disabled', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { onValueChange: onChange, value: 'xyz', input: react_2.default.createElement(Input_1.default, { id: "name-native-disabled" }), style: style.dropdown, displayEmpty: true },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 2"),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with autoWidth', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { onValueChange: onChange, autoWidth: true, value: 'xyz', input: react_2.default.createElement(Input_1.default, { id: "name-native-disabled" }), style: style.dropdown, displayEmpty: true },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 2"),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with IconComponent prop', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { IconComponent: "ArrowDropDownIcon", onValueChange: onChange, autoWidth: true, value: 'xyz', input: react_2.default.createElement(Input_1.default, { id: "name-native-disabled" }), style: style.dropdown, displayEmpty: true },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 2"),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with native prop', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { native: true, onValueChange: onChange, autoWidth: true, value: 'xyz', input: react_2.default.createElement(Input_1.default, { id: "name-native-disabled" }), style: style.dropdown, displayEmpty: true },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 2"),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with  variant="outlined" prop', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { variant: "outlined", onValueChange: onChange, autoWidth: true, value: 'xyz', input: react_2.default.createElement(Input_1.default, { id: "name-native-disabled" }), style: style.dropdown, displayEmpty: true },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 2"),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with  variant="standard" prop', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { variant: "standard", onValueChange: onChange, autoWidth: true, value: 'xyz', input: react_2.default.createElement(Input_1.default, { id: "name-native-disabled" }), style: style.dropdown, displayEmpty: true },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 2"),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with  variant="filled" prop', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { variant: "filled", onValueChange: onChange, autoWidth: true, value: 'xyz', input: react_2.default.createElement(Input_1.default, { id: "name-native-disabled" }), style: style.dropdown, displayEmpty: true },
            react_2.default.createElement(index_1.DropdownItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 2"),
            react_2.default.createElement(index_1.DropdownItem, { disabled: true, value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.DropdownItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with multiple prop', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(DemoDropdownComponent_1.default, { multiple: true })));
});
//# sourceMappingURL=Dropdown.stories.js.map