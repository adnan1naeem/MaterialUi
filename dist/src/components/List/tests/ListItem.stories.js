"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const material_ui_1 = require("material-ui");
const List_1 = require("../../List");
const react_1 = require("@storybook/react");
const material_ui_icons_1 = require("material-ui-icons");
const addon_actions_1 = require("@storybook/addon-actions");
react_1.storiesOf('ListItem', module).add('ListItem with  style,active , primary , secondary ,action , avatar and onPress props', () => (React.createElement(List_1.ListItem, { active: true, onPress: addon_actions_1.action('cllicked'), avatar: "https://facebook.github.io/react-native/img/header_logo.png", primary: "Muhammad Aqeel khan", style: { backgroundColor: '#D3D3D3' }, secondary: "Reat Js Developer", action: React.createElement(material_ui_1.Button, { style: { backgroundColor: 'blue', color: 'white' } }, "Add") }))).add('ListItem with children prop', () => (React.createElement(List_1.ListItem, { active: true, onPress: addon_actions_1.action('listitem is clicked'), style: { backgroundColor: '#D3D3D3' }, avatar: "https://facebook.github.io/react-native/img/header_logo.png", action: React.createElement(material_ui_1.Button, { style: { backgroundColor: 'blue', color: 'white' } }, "Add") }, "Muhamma Aqeel"))).add('ListItem without avatar prop', () => (React.createElement(List_1.ListItem, { active: true, onPress: addon_actions_1.action('listitem is clicked'), style: { backgroundColor: '#D3D3D3' }, primary: "Aqeel khan", secondary: "Reat Js Developer", action: React.createElement(material_ui_1.Button, { style: { backgroundColor: 'blue', color: 'white' } }, "Add") }))).add('ListItem without action prop', () => (React.createElement(List_1.ListItem, { active: false, button: true, 
    // onPress={action('listitem is clicked')}
    style: { backgroundColor: '#D3D3D3' }, avatar: "https://facebook.github.io/react-native/img/header_logo.png", primary: "Aqeel khan", secondary: "Reat Js Developer" }))).add('ListItem for inputfrom  component', () => (React.createElement(List_1.ListItem, { active: false, onPress: addon_actions_1.action('listitem is clicked'), style: { backgroundColor: '#D3D3D3' }, avatar: React.createElement(material_ui_icons_1.Drafts, null), primary: "Please Enter Name", secondary: React.createElement(material_ui_1.Input, { fullWidth: true }) })));
//# sourceMappingURL=ListItem.stories.js.map