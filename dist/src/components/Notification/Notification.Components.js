"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Snackbar_1 = __importDefault(require("material-ui/Snackbar"));
exports.Notification = (props) => {
    return (react_1.default.createElement(Snackbar_1.default, Object.assign({ message: props.text, autoHideDuration: props.duration }, props)));
};
//# sourceMappingURL=Notification.Components.js.map