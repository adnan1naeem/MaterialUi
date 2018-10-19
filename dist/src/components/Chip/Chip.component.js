"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Chip_1 = __importDefault(require("material-ui/Chip"));
const Chip = (props) => (React.createElement(Chip_1.default, Object.assign({ classes: Object.assign({}, props.style), label: props.children }, props)));
exports.default = Chip;
//# sourceMappingURL=Chip.component.js.map