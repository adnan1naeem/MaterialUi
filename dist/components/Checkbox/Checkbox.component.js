'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Form = require('material-ui/Form');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by M.Ghaznfar on 3/3/18.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
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

var BlueRainCheckbox = /** @class */function (_super) {
    __extends(BlueRainCheckbox, _super);
    function BlueRainCheckbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (name) {
            return function (event) {
                _this.props.onChange ? _this.props.onChange() : _this.setState({ checked: event.target.checked });
                _this.setState({ checked: event.target.checked });
            };
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.state = {
            checked: props.value ? props.value : false
        };
        return _this;
    }
    BlueRainCheckbox.prototype.render = function () {
        var _a = this.props,
            value = _a.value,
            others = __rest(_a, ["value"]);
        return _react2.default.createElement(_Form.FormGroup, { row: true }, _react2.default.createElement(_Form.FormControlLabel, { control: _react2.default.createElement(_Checkbox2.default, __assign({}, others, { onChange: this.handleChange('checked'), value: this.props.testID, checked: this.state.checked })), label: this.props.label }));
    };
    return BlueRainCheckbox;
}(_react2.default.Component);
exports.default = BlueRainCheckbox;
//# sourceMappingURL=Checkbox.component.js.map