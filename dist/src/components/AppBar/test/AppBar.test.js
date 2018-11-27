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
const index_1 = require("../index");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const enzyme_1 = require("enzyme");
require("jest");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('AppBar component with position prop', () => {
    const appBar = enzyme_1.shallow(React.createElement(index_1.AppBar, { position: "static" }));
    expect(appBar.props().position).toBeUndefined();
    expect(appBar).toMatchSnapshot();
});
test('AppBar component with style', () => {
    const appBar = enzyme_1.shallow(React.createElement(index_1.AppBar, { style: { 'background-color': 'green' } }));
    expect(appBar.props().style).toBeUndefined();
    expect(appBar).toMatchSnapshot();
});
test('AppBar component with children', () => {
    const appBar = enzyme_1.shallow(React.createElement(index_1.AppBar, { style: { 'background-color': 'green' }, left: "Hello" }, "Hello"));
    expect(appBar.props().left).toBeUndefined();
    expect(appBar).toMatchSnapshot();
});
//# sourceMappingURL=AppBar.test.js.map