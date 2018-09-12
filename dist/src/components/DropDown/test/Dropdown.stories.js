"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const Input_1 = __importDefault(require("material-ui/Input"));
const react_1 = require("@storybook/react");
const Paper_1 = __importDefault(require("material-ui/Paper"));
const react_2 = __importDefault(require("react"));
const stories = react_1.storiesOf('Dropdown', module);
const onChange = (event) => {
    console.log(event.target.value);
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
stories.add('Dropdown with autoWidth', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Dropdown, { onValueChange: onChange, value: '3', autoWidth: true, style: style.dropdown },
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
//# sourceMappingURL=Dropdown.stories.js.map