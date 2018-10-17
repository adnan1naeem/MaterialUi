'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppBar = require('./components/AppBar');

var _bluerainOs = require('@blueeast/bluerain-os');

var _Card = require('./components/Card');

var _Chip = require('./components/Chip');

var _ColorPicker = require('./components/ColorPicker');

var _Divider = require('./components/Divider');

var _Drawer = require('./components/Drawer');

var _DropDown = require('./components/DropDown');

var _FormControl = require('./components/FormControl');

var _List = require('./components/List');

var _Switch = require('./components/Switch');

var _TextInput = require('./components/TextInput');

var _Menu = require('./components/Menu');

var _Modal = require('./components/Modal');

var _Avatar = require('./components/Avatar');

var _Badge = require('./components/Badge');

var _Button = require('./components/Button');

var _Notification = require('./components/Notification');

var _Stepper = require('./components/Stepper');

var _ScrollView = require('./components/ScrollView');

var _ScrollView2 = _interopRequireDefault(_ScrollView);

var _Slider = require('./components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

// import { withReboot } from './withReboot';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
var MaterialUiPlugin = /** @class */function (_super) {
    __extends(MaterialUiPlugin, _super);
    function MaterialUiPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialUiPlugin.pluginName = 'MaterialUiPlugin';
    MaterialUiPlugin.slug = 'material-ui';
    MaterialUiPlugin.components = {
        AppBar: _AppBar.AppBar,
        Avatar: _Avatar.Avatar,
        Badge: _Badge.Badge,
        Button: _Button.Button,
        Card: _Card.Card,
        CardHeader: _Card.CardHeader,
        CardBody: _Card.CardBody,
        CardMedia: _Card.CardMedia,
        CardFooter: _Card.CardFooter,
        Chip: _Chip.Chip,
        ColorPicker: _ColorPicker.ColorPicker,
        Divider: _Divider.Divider,
        Drawer: _Drawer.Drawer,
        Menu: _Menu.Menu,
        MenuItem: _Menu.MenuItem,
        MenuPopper: _Menu.MenuPopper,
        Modal: _Modal.Modal,
        ModalHeader: _Modal.ModalHeader,
        ModalBody: _Modal.ModalBody,
        ModalFooter: _Modal.ModalFooter,
        Dropdown: _DropDown.Dropdown,
        DropdownItem: _DropDown.DropdownItem,
        List: _List.List,
        ListHeader: _List.ListHeader,
        ListItem: _List.ListItem,
        ListItemAvatar: _List.ListItemAvatar,
        ListItemIcon: _List.ListItemIcon,
        ListItemRightButton: _List.ListItemRightButton,
        ListItemText: _List.ListItemText,
        Switch: _Switch.Switch,
        Slider: _Slider2.default,
        Stepper: _Stepper.Stepper,
        ScrollView: _ScrollView2.default,
        Notification: _Notification.Notification,
        FormControl: _FormControl.FormControl,
        FormGroup: _FormControl.FormGroup,
        TextInput: _TextInput.TextInput
    };
    return MaterialUiPlugin;
}(_bluerainOs.Plugin);
exports.default = MaterialUiPlugin;
//# sourceMappingURL=index.js.map