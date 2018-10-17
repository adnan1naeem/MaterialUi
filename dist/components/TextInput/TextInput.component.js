'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var customOnChange = function customOnChange(props) {
    return function (event) {
        if (props.onChange) {
            props.onChange(event);
        }
        if (props.onChangeText) {
            props.onChangeText(event.target.value);
        }
    };
};
var BlueRainTextInput = function BlueRainTextInput(rawProps) {
    var onChangeText = rawProps.onChangeText,
        props = __rest(rawProps, ["onChangeText"]);
    var disabled = false;
    if (props.editable !== undefined && !props.editable) {
        disabled = true;
    }
    return _react2.default.createElement(_TextField2.default, __assign({ style: props.style, placeholder: props.placeholder, autoFocus: props.autoFocus, onChange: props.onChange || onChangeText ? customOnChange(rawProps) : function () {
            return null;
        }, rows: props.numberOfLines, disabled: disabled, helperText: props.errorText, defaultValue: props.defaultValue }, props));
};
exports.default = BlueRainTextInput;
//# sourceMappingURL=TextInput.component.js.map