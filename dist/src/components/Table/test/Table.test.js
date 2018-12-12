"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const __1 = require("../");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
require("jest");
test('Table component with children props', () => {
    const table = enzyme_1.shallow(react_1.default.createElement(__1.Table, null, "child"));
    expect(table.props().children).toBeDefined();
});
//# sourceMappingURL=Table.test.js.map