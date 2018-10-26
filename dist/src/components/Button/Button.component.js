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
const Button_1 = __importDefault(require("@material-ui/core/Button"));
exports.BlueRainButton = (props) => {
    const { iconLeft, onPress } = props, others = __rest(props, ["iconLeft", "onPress"]);
    return (React.createElement(Button_1.default, Object.assign({}, others, { color: props.color, style: props.style, disabled: props.disabled, href: props.href, mini: props.small, onClick: onPress, fullWidth: props.fullWidth, variant: props.rounded ? 'fab' : props.bordered ? 'outlined' : props.variant, size: props.small ? 'small' : props.large ? 'large' : props.size }),
        iconLeft ? iconLeft : null,
        props.title ? props.title : null,
        props.children,
        props.iconRight ? props.iconRight : null));
};
//# sourceMappingURL=Button.component.js.map