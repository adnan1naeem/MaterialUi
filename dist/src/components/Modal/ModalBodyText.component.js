"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
const react_1 = __importDefault(require("react"));
const ModalBodyText = (props) => {
    return (react_1.default.createElement(DialogContentText_1.default, null, props.children));
};
exports.default = ModalBodyText;
//# sourceMappingURL=ModalBodyText.component.js.map