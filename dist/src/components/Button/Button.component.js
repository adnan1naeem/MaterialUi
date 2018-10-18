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
const Button_1 = __importDefault(require("@material-ui/core/Button"));
;
exports.BlueRainButton = (props) => {
    return (React.createElement(Button_1.default, { color: props.color, style: props.style, disabled: props.disabled, href: props.href, mini: props.small, onClick: props.onPress, fullWidth: props.fullWidth, variant: props.rounded ? 'fab' : props.bordered ? 'outlined' : props.variant, size: props.small ? 'small' : props.large ? 'large' : props.size },
        props.iconLeft ? props.iconLeft : null,
        props.title ? props.title : null,
        props.children,
        props.iconRight ? props.iconRight : null));
};
//# sourceMappingURL=Button.component.js.map