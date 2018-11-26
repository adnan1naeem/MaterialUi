"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = __importDefault(require("@material-ui/core/Menu"));
const react_1 = __importDefault(require("react"));
const BRMenu = (props) => (react_1.default.createElement(Menu_1.default, Object.assign({ open: props.open }, props), props.children));
exports.default = BRMenu;
//# sourceMappingURL=Menu.component.js.map