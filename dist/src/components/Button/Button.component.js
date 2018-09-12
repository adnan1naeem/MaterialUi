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
const Button_1 = __importDefault(require("material-ui/Button"));
exports.BlueRainButton = (props) => {
    const widthFull = Object.assign({}, props.style, { width: '100%' });
    if (props.iconLeft) {
        return (React.createElement(Button_1.default, { raised: props.color === 'link' ? false : true, color: props.color ? (props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default') : 'default', style: props.fullWidth ? widthFull : props.style, disabled: props.disabled, href: props.href, fab: props.rounded, mini: props.small, onClick: props.onPress, dense: props.small },
            props.iconLeft,
            " ",
            props.children));
    }
    else if (props.iconRight) {
        return (React.createElement(Button_1.default, { raised: props.color === 'link' ? false : true, color: props.color ? (props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default') : 'default', style: props.fullWidth ? widthFull : props.style, disabled: props.disabled, href: props.href, fab: props.fab, mini: props.small, onClick: props.onPress, dense: props.small },
            props.children,
            " ",
            props.iconRight));
    }
    return (React.createElement(Button_1.default, { raised: props.color === 'link' ? false : true, color: props.color ? (props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default') : 'default', style: props.fullWidth ? widthFull : props.style, disabled: props.disabled, href: props.href, fab: props.fab, mini: props.small, onClick: props.onPress, dense: props.small },
        props.children,
        props.title));
};
//# sourceMappingURL=Button.component.js.map