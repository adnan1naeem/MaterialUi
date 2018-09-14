"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const Avatar_1 = require("../../Avatar");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const Folder_1 = __importDefault(require("material-ui-icons/Folder"));
const react_1 = __importDefault(require("react"));
test('List component with style props', () => {
    const list = react_test_renderer_1.default.create(react_1.default.createElement(__1.List, { style: { width: 100 } })).toJSON();
    expect(list.props.style).toEqual({ width: 100 });
    expect(list).toMatchSnapshot();
});
test('List component with children props', () => {
    const list = react_test_renderer_1.default.create(react_1.default.createElement(__1.List, null,
        react_1.default.createElement("div", null, "Hello"))).toJSON();
    expect(list.props.children).toEqual(undefined);
    expect(list).toMatchSnapshot();
});
test('ListSuheader with children props', () => {
    const listheader = react_test_renderer_1.default.create(react_1.default.createElement(__1.ListSubheader, null, "I am Header of list")).toJSON();
    expect(listheader.props.children).toEqual(undefined);
    expect(listheader).toMatchSnapshot();
});
test('ListItem  with children props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(__1.ListItem, null,
        react_1.default.createElement(Folder_1.default, null))).toJSON();
    expect(listitem.props.children).toEqual(undefined);
    expect(listitem).toMatchSnapshot();
});
test('ListItem with   style props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(__1.ListItem, { style: { width: 100 } })).toJSON();
    expect(listitem.props.style).toEqual({ width: 100 });
    expect(listitem).toMatchSnapshot();
});
test('ListItem with avatar props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(__1.ListItem, { avatar: react_1.default.createElement(Avatar_1.Avatar, null) })).toJSON();
    expect(listitem.props.avatar).toEqual(react_1.default.createElement(Avatar_1.Avatar, null));
    expect(listitem).toMatchSnapshot();
});
test('ListItem with primary props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(__1.ListItem, { primary: "hello" },
        react_1.default.createElement(Folder_1.default, null))).toJSON();
    expect(listitem.props.primary).toEqual("hello");
    expect(listitem).toMatchSnapshot();
});
test('ListItem with secondary props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(__1.ListItem, { secondary: "Hi" },
        react_1.default.createElement(Folder_1.default, null))).toJSON();
    expect(listitem.props.secondary).toEqual("Hi");
    expect(listitem).toMatchSnapshot();
});
test('ListItem with action props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(__1.ListItem, { action: react_1.default.createElement(Avatar_1.Avatar, null) },
        react_1.default.createElement(Folder_1.default, null))).toJSON();
    expect(listitem.props.action).toEqual(undefined);
    expect(listitem).toMatchSnapshot();
});
//# sourceMappingURL=List.test.js.map