"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
const react_1 = __importDefault(require("react"));
const ModalHeader = (props) => {
    return (react_1.default.createElement(DialogTitle_1.default, Object.assign({}, props), props.children));
};
exports.default = ModalHeader;
//# sourceMappingURL=ModalHeader.Component.js.map