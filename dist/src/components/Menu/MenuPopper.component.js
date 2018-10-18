"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Popper_1 = __importDefault(require("@material-ui/core/Popper"));
const react_1 = __importDefault(require("react"));
const BRMenuPopper = (props) => (react_1.default.createElement(Popper_1.default, Object.assign({}, props), props.children));
exports.default = BRMenuPopper;
//# sourceMappingURL=MenuPopper.component.js.map