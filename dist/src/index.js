"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bluerain_os_1 = require("@blueeast/bluerain-os");
// import {
// 	ButtonProperties,
// 	CardMediaProperties,
// 	ListHeaderProperties,
// 	ListItemIconProperties,
// 	ListItemRightButtonProperties
// } from '@blueeast/bluerain-ui-interfaces';
const Card_1 = require("./components/Card");
const Badge_1 = require("./components/Badge");
const Divider_1 = require("./components/Divider");
const List_1 = require("./components/List");
const Switch_1 = require("./components/Switch");
const TextInput_1 = require("./components/TextInput");
//import { Button } from './components/Button';
// import { Notification } from './components/Notification';
const Stepper_1 = require("./components/Stepper");
const Slider_1 = require("./components/Slider");
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
class MaterialUiPlugin extends bluerain_os_1.Plugin {
}
MaterialUiPlugin.pluginName = 'MaterialUiPlugin';
MaterialUiPlugin.slug = 'material-ui';
MaterialUiPlugin.components = {
    // AppBar,
    // Avatar,
    Badge: Badge_1.Badge,
    // Button,
    Card: Card_1.Card,
    CardHeader: Card_1.CardHeader,
    CardBody: Card_1.CardBody,
    CardMedia: Card_1.CardMedia,
    CardFooter: Card_1.CardFooter,
    CardActionArea: Card_1.CardActionArea,
    CardAction: Card_1.CardAction,
    // Chip,
    // Checkbox,
    // ColorPicker,
    Divider: Divider_1.Divider,
    // Drawer,
    // Menu,
    // MenuItem,
    // MenuList,
    // MenuPopper,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // ModalFooter,
    // ModalBodyText,
    // 'DropDown': Dropdown,
    // 'DropDownItem': DropdownItem,
    List: List_1.List,
    ListSubheader: List_1.ListSubheader,
    ListItem: List_1.ListItem,
    Switch: Switch_1.Switch,
    Slider: Slider_1.Slider,
    Stepper: Stepper_1.Stepper,
    // Notification,
    // FormControl,
    // FormGroup,
    TextInput: TextInput_1.TextInput,
};
exports.default = MaterialUiPlugin;
//# sourceMappingURL=index.js.map