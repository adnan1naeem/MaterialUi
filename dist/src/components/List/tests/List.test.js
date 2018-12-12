"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_1 = __importDefault(require("react"));
test('List component with style props', () => {
    const list = react_test_renderer_1.default.create(react_1.default.createElement(_1.List, { style: { width: 100 } })).toJSON();
    expect(list.props.style).toEqual({ width: 100 });
    expect(list).toMatchSnapshot();
});
test('List component with children props', () => {
    const list = react_test_renderer_1.default.create(react_1.default.createElement(_1.List, null,
        react_1.default.createElement("div", null, "Hello"))).toJSON();
    expect(list.props.children).toEqual(undefined);
    expect(list).toMatchSnapshot();
});
test('ListSuheader with children props', () => {
    const listheader = react_test_renderer_1.default.create(react_1.default.createElement(_1.ListSubheader, null, "I am Header of list")).toJSON();
    expect(listheader.props.children).toEqual(undefined);
    expect(listheader).toMatchSnapshot();
});
test('ListItem  with children props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(_1.ListItem, null, "Hello")).toJSON();
    expect(listitem.props.children).toEqual(undefined);
    expect(listitem).toMatchSnapshot();
});
test('ListItem with   style props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(_1.ListItem, { style: { width: 100 } })).toJSON();
    expect(listitem.props.style).toEqual({ width: 100 });
    expect(listitem).toMatchSnapshot();
});
test('ListItem with primary props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(_1.ListItem, { primary: "hello" }, "Hello")).toJSON();
    expect(listitem.props.primary).toEqual('hello');
    expect(listitem).toMatchSnapshot();
});
test('ListItem with secondary props', () => {
    const listitem = react_test_renderer_1.default.create(react_1.default.createElement(_1.ListItem, { secondary: "Hi" }, "Hello")).toJSON();
    expect(listitem.props.secondary).toEqual('Hi');
    expect(listitem).toMatchSnapshot();
});
//# sourceMappingURL=List.test.js.map