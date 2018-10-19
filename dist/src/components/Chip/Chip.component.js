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
const Chip_1 = __importDefault(require("@material-ui/core/Chip"));
/**
 * The universal props of Chip Component
 * @param {Object} props.style Get the style object
 * @param {ReactNode} props.children Content of the Chip
 * The specific library props of Chip Component
 * @param {string} props.label The content of the label.
 * @param {ReactNode} props.onDelete Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
 * @param {ReactNode} props.deleteIcon Custom delete icon element. Will be shown only if onDelete is set.
 * @param {ReactNode} props.onClick Function when clicked on chip.
 */
const Chip = (props) => (React.createElement(Chip_1.default, Object.assign({}, props, { classes: Object.assign({}, props.style) })));
exports.default = Chip;
//# sourceMappingURL=Chip.component.js.map