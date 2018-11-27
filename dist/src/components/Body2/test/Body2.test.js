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
const Body2_component_1 = __importDefault(require("../Body2.component"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('renders correctly with style prop ', () => {
    const wrapper = enzyme_1.shallow(React.createElement(Body2_component_1.default, { style: { color: 'blue' } }));
    expect(wrapper.props().style.color).toBe('blue');
});
//# sourceMappingURL=Body2.test.js.map