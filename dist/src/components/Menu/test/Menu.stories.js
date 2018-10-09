"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("../../List");
const index_1 = require("../index");
const Button_1 = require("../../Button");
const react_1 = require("@storybook/react");
const MenuTest1_component_1 = __importDefault(require("./MenuTest1.component"));
const MenuPopper_component_1 = __importDefault(require("../MenuPopper.component"));
const Paper_1 = __importDefault(require("material-ui/Paper"));
const react_2 = __importDefault(require("react"));
const stories = react_1.storiesOf('Menu', module);
const onChange = (event) => {
    const value = event.target.value;
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
stories.add('Menu Closed', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Menu, { open: false, style: style.dropdown },
            react_2.default.createElement(index_1.MenuItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 2 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with autoWidth', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Menu, { open: true, style: style.dropdown },
            react_2.default.createElement(index_1.MenuItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 2 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Dropdown with Override styles', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Menu, { style: { width: 600, backgroundColor: 'green' }, open: true },
            react_2.default.createElement(index_1.MenuItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 2 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Menu with disabled', () => {
    return (react_2.default.createElement(Paper_1.default, { style: style.root },
        react_2.default.createElement(index_1.Menu, { style: style.dropdown, open: true },
            react_2.default.createElement(index_1.MenuItem, { value: "xyz" }, "Item 1 "),
            react_2.default.createElement(index_1.MenuItem, { disabled: true, value: "abc" }, "Item 2"),
            react_2.default.createElement(index_1.MenuItem, { disabled: true, value: "abc" }, "Item 3 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 4 "),
            react_2.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 5 "))));
});
stories.add('Menu Component', () => {
    return (react_2.default.createElement(MenuTest1_component_1.default, null));
});
const menuItems = [
    {
        title: 'Profile',
        onClick: () => console.log('Profile Clicked'),
        style: {},
        otherProps: {}
    }, {
        title: 'My account',
        onClick: () => console.log('My account Clicked'),
        style: {},
        otherProps: {}
    }, {
        title: 'Logout',
        onClick: () => console.log('Logout Clicked'),
        style: {},
        otherProps: {}
    }
];
stories.add('Menu Popper List Component', () => {
    return (react_2.default.createElement("div", null,
        react_2.default.createElement(MenuPopper_component_1.default, { style: { width: 200 }, menuItems: menuItems, component: (handleOpen) => (react_2.default.createElement(List_1.ListItem, { button: true, onClick: handleOpen, avatar: "https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg", avatarSize: 30, primary: "hello" })) })));
});
stories.add('Menu Popper List Component placement right', () => {
    return (react_2.default.createElement("div", null,
        react_2.default.createElement(MenuPopper_component_1.default, { style: { width: 200 }, menuItems: menuItems, placement: "right-end", component: (handleOpen) => (react_2.default.createElement(List_1.ListItem, { button: true, onClick: handleOpen, avatar: "https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg", avatarSize: 30, primary: "hello" })) })));
});
stories.add('Menu Popper Button Component', () => {
    return (react_2.default.createElement("div", { style: { width: 200, height: 100, marginTop: 200 } },
        react_2.default.createElement(MenuPopper_component_1.default, { style: { width: 200 }, menuItems: menuItems, component: (handleOpen) => (react_2.default.createElement(Button_1.Button, { onPress: handleOpen, style: { width: 200, height: 100 } }, "Click Me")) })));
});
stories.add('Menu Popper Button Component placement right', () => {
    return (react_2.default.createElement("div", { style: { width: 200, height: 100, marginTop: 200 } },
        react_2.default.createElement(MenuPopper_component_1.default, { style: { width: 200 }, menuItems: menuItems, placement: "right", component: (handleOpen) => (react_2.default.createElement(Button_1.Button, { onPress: handleOpen, style: { width: 200, height: 100 } }, "Click Me")) })));
});
//# sourceMappingURL=Menu.stories.js.map