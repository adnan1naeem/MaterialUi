"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const __1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
test('Badge component with required fields', () => {
    const badge = react_test_renderer_1.default.create(React.createElement(__1.Badge, { badgeContent: '123' }, "Hello")).toJSON();
    expect(badge.props.style).toEqual(undefined);
    expect(badge).toMatchSnapshot();
});
test('Badge component with style', () => {
    const badge = react_test_renderer_1.default.create(React.createElement(__1.Badge, { badgeContent: '123', style: { 'background-color': 'green' } }, "hello")).toJSON();
    expect(badge.props.style).toEqual({ 'background-color': 'green' });
    expect(badge).toMatchSnapshot();
});
//# sourceMappingURL=Badge.test.js.map