"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_Components_1 = require("../Notification.Components");
const Button_1 = __importDefault(require("material-ui/Button"));
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const IconButton_1 = __importDefault(require("material-ui/IconButton"));
const react_1 = __importDefault(require("react"));
// const styles = (theme:any) => ({
//   close: {
//     width: theme.spacing.unit * 4,
//     height: theme.spacing.unit * 4,
//   },
// });
class SimpleSnackbar extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false,
        };
        this.handleClick = () => {
            this.setState({ open: true });
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Button_1.default, { onClick: this.handleClick }, "Open simple snackbar"),
            react_1.default.createElement(Notification_Components_1.Notification, { anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                }, open: this.state.open, autoHideDuration: 6000, onClose: this.handleClose, SnackbarContentProps: {
                    'aria-describedby': 'message-id',
                }, message: react_1.default.createElement("span", { id: "message-id" }, "Note archived"), action: [
                    react_1.default.createElement(Button_1.default, { key: "undo" }, "UNDO"),
                    react_1.default.createElement(IconButton_1.default, { key: "close", "aria-label": "Close", color: "inherit", onClick: this.handleClose },
                        react_1.default.createElement(Close_1.default, null)),
                ] })));
    }
}
exports.SimpleSnackbar = SimpleSnackbar;
//# sourceMappingURL=Notification.simple.components.js.map