"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const React = __importStar(require("react"));
const enzyme_1 = require("enzyme");
const __1 = require("../");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('renders Scroll View correctly', () => {
    const wrapper = enzyme_1.shallow(React.createElement(__1.ScrollView, null));
    expect(wrapper).toBeDefined();
});
//# sourceMappingURL=ScrollView.test.js.map