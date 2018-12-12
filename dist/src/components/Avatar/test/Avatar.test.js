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
const _1 = require("../");
const bluerain_os_1 = require("@blueeast/bluerain-os");
require("jest");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const testBootConfig_1 = require("../../../utils/testBootConfig");
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
beforeEach(() => {
    return testBootConfig_1.BluerainBoot();
});
test('Avatar component with size props', () => {
    const wrapper = enzyme_1.mount(React.createElement(bluerain_os_1.BlueRainProvider, null,
        React.createElement(_1.Avatar, { size: 100, style: { width: 100, height: 100 } })));
    expect(wrapper.props().children.props.style).toEqual({ width: 100, height: 100 });
});
test('Avatar component with style', () => {
    const wrapper = enzyme_1.mount(React.createElement(bluerain_os_1.BlueRainProvider, null,
        React.createElement(_1.Avatar, { size: 100, style: { backgroundColor: 'green' } })));
    expect(wrapper.props().children.props.style).toEqual({ backgroundColor: 'green' });
});
test('Avatar component with src props', () => {
    const wrapper = enzyme_1.mount(React.createElement(bluerain_os_1.BlueRainProvider, null,
        React.createElement(_1.Avatar, { src: "https://material-ui-next.com/static/images/remy.jpg" })));
    expect(wrapper.props().children.props.src).toEqual('https://material-ui-next.com/static/images/remy.jpg');
});
// test('Avatar component with src and size props', () => {
// 	const avatar = renderer.create(
// 	<BlueRainProvider><Avatar src="https://material-ui-next.com/static/images/remy.jpg" size={200}></Avatar></BlueRainProvider>
//   ).toJSON();
// 	expect(avatar ? avatar.props.style:{}).toEqual([{ 'width':200, 'height':200, backgroundColor:'lightgrey', borderRadius:1000, display:'flex', justifyContent:'center', alignItems:'center', fontSize:.5*200 },{}]);
// 	expect(avatar ? avatar.props.source: {}).toEqual('https://material-ui-next.com/static/images/remy.jpg');
// 	expect(avatar).toMatchSnapshot();
// });
// test('Avatar component with children props', () => {
// 	const avatar = renderer.create(
//       <BlueRainProvider><Avatar size={200}>hello</Avatar></BlueRainProvider>
// 	).toJSON();
// 	expect(avatar ? avatar.props.children : {}).toEqual(undefined);
// 	expect(avatar).toMatchSnapshot();
// });
//# sourceMappingURL=Avatar.test.js.map