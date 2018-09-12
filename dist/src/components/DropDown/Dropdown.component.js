"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Select_1 = __importDefault(require("material-ui/Select"));
const DropDown = (props) => (react_1.default.createElement(Select_1.default, Object.assign({ onChange: props.onValueChange, value: props.selectedValue, onSelect: props.selectedValue }, props)));
exports.default = DropDown;
//# sourceMappingURL=Dropdown.component.js.map