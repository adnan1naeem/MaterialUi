"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Body1_component_1 = __importDefault(require("./components/Body1/Body1.component"));
const Body2_component_1 = __importDefault(require("./components/Body2/Body2.component"));
const Caption_component_1 = __importDefault(require("./components/Caption/Caption.component"));
const H1_component_1 = __importDefault(require("./components/H1/H1.component"));
const H2_component_1 = __importDefault(require("./components/H2/H2.component"));
const H3_component_1 = __importDefault(require("./components/H3/H3.component"));
const H4_component_1 = __importDefault(require("./components/H4/H4.component"));
const H5_component_1 = __importDefault(require("./components/H5/H5.component"));
const H6_component_1 = __importDefault(require("./components/H6/H6.component"));
const Overline_component_1 = __importDefault(require("./components/Overline/Overline.component"));
const Subtitle1_component_1 = __importDefault(require("./components/Subtitle1/Subtitle1.component"));
const Subtitle2_component_1 = __importDefault(require("./components/Subtitle2/Subtitle2.component"));
const Card_1 = require("./components/Card");
const AppBar_1 = require("./components/AppBar");
const Avatar_1 = require("./components/Avatar");
const Badge_1 = require("./components/Badge");
const Button_1 = require("./components/Button");
const Checkbox_1 = require("./components/Checkbox");
const Chip_1 = require("./components/Chip");
const ColorPicker_1 = require("./components/ColorPicker");
const Divider_1 = require("./components/Divider");
const Drawer_1 = require("./components/Drawer");
const DropDown_1 = require("./components/DropDown");
const FormControl_1 = require("./components/FormControl");
const List_1 = require("./components/List");
const Menu_1 = require("./components/Menu");
const Modal_1 = require("./components/Modal");
const Slider_1 = require("./components/Slider");
const Switch_1 = require("./components/Switch");
const TextInput_1 = require("./components/TextInput");
const Text_1 = require("./components/Text");
const bluerain_os_1 = require("@blueeast/bluerain-os");
const Stepper_1 = require("./components/Stepper");
const WebStepper_1 = require("./components/WebStepper");
// import { Notification } from './components/Notification';
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
    CardActionArea: Card_1.CardActionArea,
    CardAction: Card_1.CardAction,
    Chip: Chip_1.Chip,
    Checkbox: Checkbox_1.Checkbox,
    ColorPicker: ColorPicker_1.ColorPicker,
    Divider: Divider_1.Divider,
    Drawer: Drawer_1.Drawer,
    Menu: Menu_1.Menu,
    MenuItem: Menu_1.MenuItem,
    MenuList: Menu_1.MenuList,
    MenuPopper: Menu_1.MenuPopper,
    Modal: Modal_1.Modal,
    ModalHeader: Modal_1.ModalHeader,
    ModalBody: Modal_1.ModalBody,
    ModalFooter: Modal_1.ModalFooter,
    ModalBodyText: Modal_1.ModalBodyText,
    'DropDown': DropDown_1.Dropdown,
    'DropDownItem': DropDown_1.DropdownItem,
    List: List_1.List,
    ListSubheader: List_1.ListSubheader,
    ListItem: List_1.ListItem,
    Switch: Switch_1.Switch,
    Slider: Slider_1.Slider,
    Stepper: Stepper_1.Stepper,
    // Notification,
    FormControl: FormControl_1.FormControl,
    FormGroup: FormControl_1.FormGroup,
    TextInput: TextInput_1.TextInput,
    Text: Text_1.Text,
    H1: H1_component_1.default,
    H2: H2_component_1.default,
    H3: H3_component_1.default,
    H4: H4_component_1.default,
    H5: H5_component_1.default,
    H6: H6_component_1.default,
    Subtitle1: Subtitle1_component_1.default,
    Subtitle2: Subtitle2_component_1.default,
    Body1: Body1_component_1.default,
    Body2: Body2_component_1.default,
    Caption: Caption_component_1.default,
    Overline: Overline_component_1.default,
    WebStepper: WebStepper_1.WebStepper,
};
exports.default = MaterialUiPlugin;
//# sourceMappingURL=index.js.map