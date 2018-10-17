'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluerainOs = require('@blueeast/bluerain-os');

var _reactRangeProgress = require('react-range-progress');

var _reactRangeProgress2 = _interopRequireDefault(_reactRangeProgress);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    overflow: 'visible'
};
var DEFAULT_VALUE = 0;
var Slider = /** @class */function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        _this.onValueChange = function (value, name) {
            _this.setState({ value: value });
            if (_this.props.onValueChange) {
                _this.props.onValueChange(value, name);
            }
        };
        _this.onValueChange = _this.onValueChange.bind(_this);
        _this.state = {
            value: props.defaultValue ? props.defaultValue : DEFAULT_VALUE
        };
        return _this;
    }
    Slider.prototype.render = function () {
        var View = this.props.bluerain ? this.props.bluerain.Components.get('View') : 'div';
        var Text = this.props.bluerain ? this.props.bluerain.Components.get('Text') : 'span';
        return _react2.default.createElement(View, { style: styles }, _react2.default.createElement(View, { style: { display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 } }, _react2.default.createElement(Text, null, "Value"), _react2.default.createElement(Text, null, this.state.value)), _react2.default.createElement(_reactRangeProgress2.default, __assign({ thumbSize: 10, thumbColor: { r: 0, g: 188, b: 212, a: 1 }, value: this.state.value, fillColor: { r: 0, g: 188, b: 212, a: 1 }, trackColor: { r: 158, g: 158, b: 158, a: 1 }, height: 2, width: "100%", onChange: this.onValueChange, min: this.props.minimumValue, max: this.props.maximumValue }, this.props)));
    };
    return Slider;
}(_react2.default.Component);
exports.default = (0, _bluerainOs.withBlueRain)(Slider);
//# sourceMappingURL=Slider.component.js.map