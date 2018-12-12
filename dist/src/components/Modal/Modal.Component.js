"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
const react_1 = __importDefault(require("react"));
const Modal = (props) => {
    return (react_1.default.createElement(Dialog_1.default, Object.assign({ open: props.visible, onClose: props.handleClose, onEscapeKeyDown: props.onRequestClose }, props), props.children));
};
exports.default = Modal;
//# sourceMappingURL=Modal.Component.js.map