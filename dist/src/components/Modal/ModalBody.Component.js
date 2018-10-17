"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
const react_1 = __importDefault(require("react"));
const ModalBody = (props) => {
    return (react_1.default.createElement(DialogContent_1.default, null, props.children));
};
exports.default = ModalBody;
//# sourceMappingURL=ModalBody.Component.js.map