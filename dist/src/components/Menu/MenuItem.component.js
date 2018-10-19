"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const react_1 = __importDefault(require("react"));
const BRMenuItem = (props) => (react_1.default.createElement(MenuItem_1.default, Object.assign({ onClick: props.onClick }, props)));
exports.default = BRMenuItem;
//# sourceMappingURL=MenuItem.component.js.map