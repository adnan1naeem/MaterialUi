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
const List_1 = require("../../List");
const react_1 = require("@storybook/react");
const Folder_1 = __importDefault(require("@material-ui/icons/Folder"));
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const addon_actions_1 = require("@storybook/addon-actions");
const Switch_1 = __importDefault(require("@material-ui/core/Switch"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Input_1 = __importDefault(require("@material-ui/core/Input"));
react_1.storiesOf('ListItem', module).add('ListItem with  style,active , primary , secondary ,action , avatar and onPress props', () => (React.createElement(List_1.ListItem, { active: true, onPress: addon_actions_1.action('cllicked'), avatar: "https://facebook.github.io/react-native/img/header_logo.png", primary: "Muhammad Aqeel khan", style: { backgroundColor: '#D3D3D3' }, secondary: "Reat Js Developer", action: React.createElement(bluerain_os_1.default.Components.View, { style: { flex: '0 0 auto' } },
        React.createElement(bluerain_os_1.default.Components.Text, null, "Hello")) }))).add('ListItem with children prop', () => (React.createElement(List_1.ListItem, { active: true, onPress: addon_actions_1.action('listitem is clicked'), style: { backgroundColor: '#D3D3D3' }, avatar: "https://facebook.github.io/react-native/img/header_logo.png", action: React.createElement(Switch_1.default, { value: true }) }, "Muhamma Aqeel"))).add('ListItem without avatar prop', () => (React.createElement(List_1.ListItem, { active: true, onPress: addon_actions_1.action('listitem is clicked'), style: { backgroundColor: '#D3D3D3' }, primary: "Aqeel khan", secondary: "Reat Js Developer", action: React.createElement(Switch_1.default, { value: true }) }))).add('ListItem without action prop', () => (React.createElement(List_1.ListItem, { active: false, button: true, 
    // onPress={action('listitem is clicked')}
    style: { backgroundColor: '#D3D3D3' }, avatar: "https://facebook.github.io/react-native/img/header_logo.png", primary: "Aqeel khan", secondary: "Reat Js Developer", action: React.createElement(Button_1.default, { style: { backgroundColor: 'red' } }, "Add") }))).add('ListItem for inputfrom  component', () => (React.createElement(List_1.ListItem, { active: false, onPress: addon_actions_1.action('listitem is clicked'), style: { backgroundColor: '#D3D3D3' }, avatar: React.createElement(Folder_1.default, null), primary: "Please Enter Name", secondary: React.createElement(Input_1.default, { fullWidth: true }) })));
//# sourceMappingURL=ListItem.stories.js.map