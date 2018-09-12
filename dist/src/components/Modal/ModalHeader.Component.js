"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = require("material-ui/Dialog");
const react_1 = __importDefault(require("react"));
const ModalHeader = (props) => {
    return (react_1.default.createElement(Dialog_1.DialogTitle, null, props.children));
};
exports.default = ModalHeader;
//# sourceMappingURL=ModalHeader.Component.js.map