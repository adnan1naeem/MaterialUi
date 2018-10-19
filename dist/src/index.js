"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppBar_1 = require("./components/AppBar");
const bluerain_os_1 = require("@blueeast/bluerain-os");
// import {
// 	ButtonProperties,
// 	CardMediaProperties,
// 	ListHeaderProperties,
// 	ListItemIconProperties,
// 	ListItemRightButtonProperties
// } from '@blueeast/bluerain-ui-interfaces';
const Card_1 = require("./components/Card");
// import { Chip, MUIChipProperties } from './components/Chip';
// import { ColorPicker, ColorPickerProperties } from './components/ColorPicker';
const Divider_1 = require("./components/Divider");
// import { Dropdown, DropdownItem, MUIDropdownItem, MUIPickerProperties } from './components/DropDown';
// import { FormControl, FormGroup, MUIFormControlProperties, MUIFormGroupProperties } from './components/FormControl';
// import {
// 	List,
// 	ListSubheader,
// 	ListItem,
// 	MUIListItemProperties,
// 	MUIListProperties
// } from './components/List';
const Switch_1 = require("./components/Switch");
// import { MUITextInputProperties, TextInput } from './components/TextInput';
const Menu_1 = require("./components/Menu");
// import { Modal, ModalBody, ModalFooter, ModalHeader, ModalBodyText } from './components/Modal';
const Avatar_1 = require("./components/Avatar");
// import { Badge } from './components/Badge';
// import { Button } from './components/Button';
// import { Notification } from './components/Notification';
// import { Stepper } from './components/Stepper';
// import H1 from './components/H1/H1.component';
// import H2 from './components/H2/H2.component';
// import H3 from './components/H3/H3.component';
// import H4 from './components/H4/H4.component';
// import H5 from './components/H5/H5.component';
// import H6 from './components/H6/H6.component';
// import Subtitle1 from './components/Subtitle1/Subtitle1.component';
// import Subtitle2 from './components/Subtitle2/Subtitle2.component';
// import Body1 from './components/Body1/Body1.component';
// import Body2 from './components/Body2/Body2.component';
// import Overline from './components/Overline/Overline.component';
// import Caption from './components/Caption/Caption.component';
// import Checkbox from './components/Checkbox';
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
    AppBar: AppBar_1.AppBar,
    Avatar: Avatar_1.Avatar,
    // Badge,
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
    Menu: Menu_1.Menu,
    MenuItem: Menu_1.MenuItem,
    MenuList: Menu_1.MenuList,
    MenuPopper: Menu_1.MenuPopper,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // ModalFooter,
    // ModalBodyText,
    // 'DropDown': Dropdown,
    // 'DropDownItem': DropdownItem,
    // List,
    // ListSubheader,
    // ListItem,
    Switch: Switch_1.Switch,
    Slider: Slider_1.Slider,
};
exports.default = MaterialUiPlugin;
//# sourceMappingURL=index.js.map