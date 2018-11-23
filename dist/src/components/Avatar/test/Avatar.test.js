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
const bluerain_os_1 = require("@blueeast/bluerain-os");
require("jest");
// import FolderIcon from '@material-ui/icons/Folder';
const testBootConfig_1 = require("../../../utils/testBootConfig");
const console = require("console");
beforeEach(() => {
    return testBootConfig_1.BluerainBoot();
});
test('Avatar component with size props', () => {
    const avatar = react_test_renderer_1.default.create(React.createElement(bluerain_os_1.BlueRainProvider, null,
        React.createElement(__1.Avatar, { size: 100, style: { width: 100, height: 100 } }))).toJSON();
    console.log('Avatarrrrr===>1', avatar);
    console.log('Avatarrrrr===>2', avatar.props.children);
    expect(avatar ? avatar.props.style : {}).toEqual({ width: 100, height: 100 });
    expect(avatar).toMatchSnapshot();
});
test('Avatar component with style', () => {
    const avatar = react_test_renderer_1.default.create(React.createElement(bluerain_os_1.BlueRainProvider, null,
        React.createElement(__1.Avatar, { style: { backgroundColor: 'green' } }))).toJSON();
    expect(avatar ? avatar.props.style : {}).toEqual({ backgroundColor: 'green' });
    expect(avatar).toMatchSnapshot();
});
test('Avatar component with src props', () => {
    const avatar = react_test_renderer_1.default.create(React.createElement(bluerain_os_1.BlueRainProvider, null,
        React.createElement(__1.Avatar, { src: "https://material-ui-next.com/static/images/remy.jpg" }))).toJSON();
    expect(avatar ? avatar.props.src : {}).toBe('https://material-ui-next.com/static/images/remy.jpg');
    expect(avatar).toMatchSnapshot();
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