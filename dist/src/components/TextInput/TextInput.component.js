"use strict";
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
const TextField_1 = __importDefault(require("material-ui/TextField"));
const customOnChange = (props) => (event) => {
    if (props.onChange) {
        props.onChange(event);
    }
    if (props.onChangeText) {
        props.onChangeText(event.target.value);
    }
};
const BlueRainTextInput = (rawProps) => {
    const { onChangeText } = rawProps, props = __rest(rawProps, ["onChangeText"]);
    let disabled = false;
    if (props.editable !== undefined && !props.editable) {
        disabled = true;
    }
    // const label = (props.placeholder && props.label) ? props.placeholder : props.label;
    const label = props.placeholder ? props.placeholder : props.label;
    console.log('Label', label);
    return (react_1.default.createElement(TextField_1.default, Object.assign({}, props, { type: props.secureTextEntry ? 'password' : 'text', style: props.style, label: label, placeholder: props.placeholder, autoFocus: props.autoFocus, onChange: (props.onChange || onChangeText) ? customOnChange(rawProps) : () => { return null; }, rows: props.numberOfLines, disabled: disabled, helperText: props.errorText, defaultValue: props.defaultValue })));
};
exports.default = BlueRainTextInput;
//# sourceMappingURL=TextInput.component.js.map