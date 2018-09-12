"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
// import { List, ListItem, ListItemText } from '../List';
const react_popper_1 = require("react-popper");
// import { Menu, MenuItem } from '../Menu';
const Menu_1 = require("../Menu");
// import { Button } from '../Button';
const Menu_2 = require("material-ui/Menu");
const ClickAwayListener_1 = __importDefault(require("material-ui/utils/ClickAwayListener"));
const Grow_1 = __importDefault(require("material-ui/transitions/Grow"));
const Paper_1 = __importDefault(require("material-ui/Paper"));
const react_1 = __importDefault(require("react"));
class MenuPopper extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.target1 = '';
        this.state = {
            anchorEl: null,
        };
        this.handleOpen = (event) => {
            this.setState({ anchorEl: event.currentTarget });
        };
        this.handleClose = (event, onClick) => {
            if (this.target1.contains(event.target)) {
                return;
            }
            onClick ? onClick() : console.log('No Click functionality passed');
            this.setState({ anchorEl: null });
        };
    }
    render() {
        const { anchorEl } = this.state;
        return (react_1.default.createElement("div", { style: this.props.style },
            react_1.default.createElement(react_popper_1.Manager, null,
                react_1.default.createElement(react_popper_1.Target, null,
                    react_1.default.createElement("div", { ref: node => {
                            this.target1 = node;
                        } }, this.props.component ? this.props.component(this.handleOpen) : null)),
                react_1.default.createElement(react_popper_1.Popper, { placement: this.props.placement, eventsEnabled: Boolean(anchorEl) },
                    react_1.default.createElement(ClickAwayListener_1.default, { onClickAway: this.handleClose },
                        react_1.default.createElement(Grow_1.default, { in: Boolean(anchorEl), style: { transformOrigin: '0 0 0' } },
                            react_1.default.createElement(Paper_1.default, Object.assign({}, this.props.paperProps),
                                react_1.default.createElement(Menu_2.MenuList, Object.assign({ role: "menu" }, this.props.menuListProps), this.props.menuItems && Boolean(anchorEl) ? this.props.menuItems.map((each) => (react_1.default.createElement(Menu_1.MenuItem, Object.assign({ onClick: (e) => this.handleClose(e, each.onClick), style: each.style }, each.otherProps), each.title))) : null))))))));
    }
}
exports.default = MenuPopper;
//# sourceMappingURL=MenuPopper.component.js.map