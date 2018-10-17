'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlueRainButton = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var BlueRainButton = exports.BlueRainButton = function BlueRainButton(props) {
    var widthFull = __assign({}, props.style, { width: '100%' });
    if (props.iconLeft) {
        return React.createElement(_Button2.default, { raised: props.color === 'link' ? false : true, color: props.color ? props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default' : 'default', style: props.fullWidth ? widthFull : props.style, disabled: props.disabled, href: props.href, fab: props.fab, mini: props.small, onClick: props.onPress, dense: props.small }, props.iconLeft, " ", props.children);
    } else if (props.iconRight) {
        return React.createElement(_Button2.default, { raised: props.color === 'link' ? false : true, color: props.color ? props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default' : 'default', style: props.fullWidth ? widthFull : props.style, disabled: props.disabled, href: props.href, fab: props.fab, mini: props.small, onClick: props.onPress, dense: props.small }, props.children, " ", props.iconRight);
    }
    return React.createElement(_Button2.default, { raised: props.color === 'link' ? false : true, color: props.color ? props.color === 'default' || props.color === 'accent' || props.color === 'primary' || props.color === 'contrast' ? props.color : 'default' : 'default', style: props.fullWidth ? widthFull : props.style, disabled: props.disabled, href: props.href, fab: props.fab, mini: props.small, onClick: props.onPress, dense: props.small }, props.children);
};
// export default BlueRainButton;
//# sourceMappingURL=Button.component.js.map