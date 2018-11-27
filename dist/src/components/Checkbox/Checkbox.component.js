"use strict";
/**
 * Created by M.Ghaznfar on 3/3/18.
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
const FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
const Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
const BlueRainCheckbox = (props) => {
    const { value, onPress, testID } = props, others = __rest(props, ["value", "onPress", "testID"]);
    return (react_1.default.createElement(FormGroup_1.default, { row: true },
        react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Checkbox_1.default, Object.assign({}, others, { onChange: onPress, value: testID, checked: value })), label: props.label })));
};
exports.default = BlueRainCheckbox;
//# sourceMappingURL=Checkbox.component.js.map