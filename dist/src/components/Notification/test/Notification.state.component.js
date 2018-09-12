"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_Components_1 = require("../Notification.Components");
const Button_1 = __importDefault(require("material-ui/Button"));
const react_1 = __importDefault(require("react"));
// import Snackbar from 'material-ui/Snackbar';
class PositionedSnackbar extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false,
            vertical: 7,
            horizontal: 8,
        };
        this.handleClick = (state) => () => {
            this.setState(Object.assign({ open: true }, state));
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
    }
    render() {
        const { vertical, horizontal, open } = this.state;
        const obj = { horizontal, vertical };
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Button_1.default, { onClick: this.handleClick({ vertical: 'top', horizontal: 'center' }) }, "Top-Center"),
            react_1.default.createElement(Button_1.default, { onClick: this.handleClick({ vertical: 'top', horizontal: 'right' }) }, "Top-Right"),
            react_1.default.createElement(Button_1.default, { onClick: this.handleClick({ vertical: 'bottom', horizontal: 'right' }) }, "Bottom-Right"),
            react_1.default.createElement(Button_1.default, { onClick: this.handleClick({ vertical: 'bottom', horizontal: 'center' }) }, "Bottom-Center"),
            react_1.default.createElement(Button_1.default, { onClick: this.handleClick({ vertical: 'bottom', horizontal: 'left' }) }, "Bottom-Left"),
            react_1.default.createElement(Button_1.default, { onClick: this.handleClick({ vertical: 'top', horizontal: 'left' }) }, "Top-Left"),
            react_1.default.createElement(Notification_Components_1.Notification, { anchorOrigin: obj, open: open, onClose: this.handleClose, SnackbarContentProps: {
                    'aria-describedby': 'message-id',
                }, message: react_1.default.createElement("span", { id: "message-id" }, "I love snacks") })));
    }
}
exports.default = PositionedSnackbar;
//# sourceMappingURL=Notification.state.component.js.map