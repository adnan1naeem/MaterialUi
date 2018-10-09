"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const Drawer_1 = require("../../Drawer");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('It should return true when drawer is close. ', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(Drawer_1.Drawer, { anchor: "right", open: false }));
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
});
test('It should render overlay type drawer . ', () => {
    const wrapper = enzyme_1.shallow(react_1.default.createElement(Drawer_1.Drawer, { anchor: "right", open: false }));
    expect(wrapper).toBeDefined();
});
//# sourceMappingURL=Drawer.test.js.map