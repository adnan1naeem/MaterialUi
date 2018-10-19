"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const DropdownItem = (props) => (react_1.default.createElement(MenuItem_1.default, Object.assign({ value: props.value }, props)));
exports.default = DropdownItem;
//# sourceMappingURL=DropdownItem.component.js.map