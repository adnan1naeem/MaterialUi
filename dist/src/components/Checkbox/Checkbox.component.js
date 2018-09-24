"use strict";
/**
 * Created by M.Ghaznfar on 3/3/18.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { FormControlLabel, FormGroup } from 'material-ui/Form';
const react_1 = __importDefault(require("react"));
const Checkbox_1 = __importDefault(require("material-ui/Checkbox"));
const BlueRainCheckbox = (props) => {
    return (react_1.default.createElement(Checkbox_1.default, Object.assign({}, props, { onChange: props.onPress, value: props.testID, checked: props.value })));
};
exports.default = BlueRainCheckbox;
//# sourceMappingURL=Checkbox.component.js.map