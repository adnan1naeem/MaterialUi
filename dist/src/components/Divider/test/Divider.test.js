"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_1 = __importDefault(require("react"));
test('Divider component with default values', () => {
    const divider = react_test_renderer_1.default.create(react_1.default.createElement(__1.Divider, null)).toJSON();
    expect(divider.props.light).toEqual(undefined);
    expect(divider).toMatchSnapshot();
});
test('Divider component with style', () => {
    const divider = react_test_renderer_1.default.create(react_1.default.createElement(__1.Divider, { absolute: true })).toJSON();
    expect(divider.props.absolute).toEqual(undefined);
    expect(divider).toMatchSnapshot();
});
//# sourceMappingURL=Divider.test.js.map