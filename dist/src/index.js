"use strict";
// import * as React from 'react';
// import { Plugin } from '@blueeast/bluerain-os';
// import { withReboot } from './withReboot';
// import * Compo as from '@blueeast/bluerain-ui-interfaces';
Object.defineProperty(exports, "__esModule", { value: true });
const AppBar_1 = require("./components/AppBar");
const bluerain_os_1 = require("@blueeast/bluerain-os");
const Card_1 = require("./components/Card");
const Chip_1 = require("./components/Chip");
const ColorPicker_1 = require("./components/ColorPicker");
const Divider_1 = require("./components/Divider");
const Drawer_1 = require("./components/Drawer");
const DropDown_1 = require("./components/DropDown");
const FormControl_1 = require("./components/FormControl");
const List_1 = require("./components/List");
const Switch_1 = require("./components/Switch");
const TextInput_1 = require("./components/TextInput");
const Menu_1 = require("./components/Menu");
const Modal_1 = require("./components/Modal");
const Avatar_1 = require("./components/Avatar");
const Badge_1 = require("./components/Badge");
const Button_1 = require("./components/Button");
const Notification_1 = require("./components/Notification");
const Stepper_1 = require("./components/Stepper");
// import Slider from './components/Slider';
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
    AppBar: AppBar_1.AppBar,
    Avatar: Avatar_1.Avatar,
    Badge: Badge_1.Badge,
    Button: Button_1.Button,
    Card: Card_1.Card,
    CardHeader: Card_1.CardHeader,
    CardBody: Card_1.CardBody,
    CardMedia: Card_1.CardMedia,
    CardFooter: Card_1.CardFooter,
    Chip: Chip_1.Chip,
    ColorPicker: ColorPicker_1.ColorPicker,
    Divider: Divider_1.Divider,
    Drawer: Drawer_1.Drawer,
    Menu: Menu_1.Menu,
    MenuItem: Menu_1.MenuItem,
    Modal: Modal_1.Modal,
    ModalHeader: Modal_1.ModalHeader,
    ModalBody: Modal_1.ModalBody,
    ModalFooter: Modal_1.ModalFooter,
    'DropDown': DropDown_1.Dropdown,
    'DropDownItem': DropDown_1.DropdownItem,
    List: List_1.List,
    ListSubheader: List_1.ListSubheader,
    ListItem: List_1.ListItem,
    Switch: Switch_1.Switch,
    // Slider,
    Stepper: Stepper_1.Stepper,
    Notification: Notification_1.Notification,
    FormControl: FormControl_1.FormControl,
    FormGroup: FormControl_1.FormGroup,
    TextInput: TextInput_1.TextInput,
};
exports.default = MaterialUiPlugin;
//# sourceMappingURL=index.js.map