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
const Fab_1 = __importDefault(require("@material-ui/core/Fab"));
exports.BlueRainButton = (props) => {
    const { fab, iconLeft, onPress, transparent } = props, others = __rest(props, ["fab", "iconLeft", "onPress", "transparent"]);
    return (React.createElement(React.Fragment, null, fab
        ?
            React.createElement(Fab_1.default, Object.assign({}, others, { color: props.primary ? 'primary' : props.color, style: props.success
                    ? Object.assign({ backgroundColor: 'green' }, props.style) : props.dark
                    ? Object.assign({ backgroundColor: 'black' }, props.style) : props.warning
                    ? Object.assign({ backgroundColor: 'yellow' }, props.style) : props.danger
                    ? Object.assign({ backgroundColor: 'red' }, props.style) : props.style, disabled: props.disabled, href: props.href, mini: props.small, onClick: onPress, fullWidth: props.fullWidth, variant: "extended", size: props.small ? 'small' : props.large ? 'large' : props.size }),
                iconLeft ? iconLeft : null,
                " ",
                props.title ? props.title : null,
                " ",
                props.children,
                props.iconRight ? props.iconRight : null)
        :
            React.createElement(Button_1.default, Object.assign({}, others, { color: props.primary ? 'primary' : props.color, style: props.success
                    ? Object.assign({ backgroundColor: 'green' }, props.style) : props.dark
                    ? Object.assign({ backgroundColor: 'black' }, props.style) : props.warning
                    ? Object.assign({ backgroundColor: 'yellow' }, props.style) : props.danger
                    ? Object.assign({ backgroundColor: 'red' }, props.style) : props.style, disabled: props.disabled, href: props.href, mini: props.small, onClick: onPress, fullWidth: props.fullWidth, variant: props.rounded ? 'fab' : props.bordered ? 'outlined' : props.primary || props.light ? 'contained' : props.variant, size: props.small ? 'small' : props.large ? 'large' : props.size }),
                iconLeft ? iconLeft : null,
                " ",
                props.title ? props.title : null,
                " ",
                props.children,
                props.iconRight ? props.iconRight : null)));
};
//# sourceMappingURL=Button.component.js.map