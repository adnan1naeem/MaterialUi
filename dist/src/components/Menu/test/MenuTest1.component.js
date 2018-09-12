"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
// import { List, ListItem, ListItemText } from '../../List';
const List_1 = require("../../List");
const Menu_1 = require("../../Menu");
// import { Button } from '../../Button';
const react_1 = __importDefault(require("react"));
// import Button from 'material-ui/Button';
// import Fade from 'material-ui/transitions/Fade';
class FadeMenu extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            anchorEl: null,
            anchorEl2: null,
        };
        this.handleClick = (event) => {
            this.setState({ anchorEl: event.currentTarget });
            this.setState({ anchorEl2: event.currentTarget });
        };
        this.handleClose = () => {
            this.setState({ anchorEl: null });
            this.setState({ anchorEl2: null });
        };
    }
    render() {
        const { anchorEl, anchorEl2 } = this.state;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(List_1.ListItem, { button: true, onClick: this.handleClick, style: { width: 150 }, "aria-controls": "fade-menu" }, "Hello"),
                react_1.default.createElement(Menu_1.Menu, { id: "fade-menu", anchorEl: anchorEl !== null ? anchorEl : undefined, open: Boolean(anchorEl), onClose: this.handleClose },
                    react_1.default.createElement(Menu_1.MenuItem, { onClick: this.handleClose }, "wow"),
                    react_1.default.createElement(Menu_1.MenuItem, { onClick: this.handleClose }, "My account"),
                    react_1.default.createElement(Menu_1.MenuItem, { onClick: this.handleClose }, "Logout"))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(List_1.ListItem, { button: true, onClick: this.handleClick, style: { width: 150 }, "aria-controls": "fade-menu2" }, "Hello"),
                react_1.default.createElement(Menu_1.Menu, { id: "fade-menu2", anchorEl: anchorEl2 !== null ? anchorEl2 : undefined, open: Boolean(anchorEl2), onClose: this.handleClose },
                    react_1.default.createElement(Menu_1.MenuItem, { onClick: this.handleClose }, "Profdasile"),
                    react_1.default.createElement(Menu_1.MenuItem, { onClick: this.handleClose }, "My account"),
                    react_1.default.createElement(Menu_1.MenuItem, { onClick: this.handleClose }, "Logout")))));
    }
}
exports.default = FadeMenu;
//# sourceMappingURL=MenuTest1.component.js.map