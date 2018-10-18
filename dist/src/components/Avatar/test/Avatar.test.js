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
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
require("jest");
// import FolderIcon from '@material-ui/icons/Folder';
bluerain_os_1.default.Components.set('Image', () => React.createElement("div", null, "Image"));
bluerain_os_1.default.Components.set('View', () => React.createElement("div", null, "View"));
test('Avatar component with size props', () => {
    const avatar = react_test_renderer_1.default.create(React.createElement(_1.Avatar, { size: 100 })).toJSON();
    expect(avatar ? avatar.props.style : {}).toEqual([{ 'width': 100, 'height': 100, backgroundColor: 'lightgrey', borderRadius: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: .5 * 100 }, {}]);
    expect(avatar).toMatchSnapshot();
});
test('Avatar component with style', () => {
    const avatar = react_test_renderer_1.default.create(React.createElement(_1.Avatar, { style: { backgroundColor: 'green' } })).toJSON();
    expect(avatar ? avatar.props.style : {}).toEqual([{ 'width': 70, 'height': 70, backgroundColor: 'lightgrey', borderRadius: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: .5 * 70 }, { backgroundColor: 'green' }]);
    expect(avatar).toMatchSnapshot();
});
test('Avatar component with src props', () => {
    const avatar = react_test_renderer_1.default.create(React.createElement(_1.Avatar, { src: "https://material-ui-next.com/static/images/remy.jpg" })).toJSON();
    expect(avatar ? avatar.props.source : {}).toEqual('https://material-ui-next.com/static/images/remy.jpg');
    expect(avatar).toMatchSnapshot();
});
test('Avatar component with src and size props', () => {
    const avatar = react_test_renderer_1.default.create(React.createElement(_1.Avatar, { src: "https://material-ui-next.com/static/images/remy.jpg", size: 200 })).toJSON();
    expect(avatar ? avatar.props.style : {}).toEqual([{ 'width': 200, 'height': 200, backgroundColor: 'lightgrey', borderRadius: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: .5 * 200 }, {}]);
    expect(avatar ? avatar.props.source : {}).toEqual('https://material-ui-next.com/static/images/remy.jpg');
    expect(avatar).toMatchSnapshot();
});
test('Avatar component with children props', () => {
    const avatar = react_test_renderer_1.default.create(React.createElement(_1.Avatar, { size: 200 }, "hello")).toJSON();
    expect(avatar ? avatar.props.children : {}).toEqual(undefined);
    expect(avatar).toMatchSnapshot();
});
//# sourceMappingURL=Avatar.test.js.map