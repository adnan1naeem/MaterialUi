'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ColorPicker = undefined;

var _bluerainOs = require('@blueeast/bluerain-os');

var _reactColor = require('react-color');

var _pickerStyles = require('./pickerStyles');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

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

var ColorPicker = /** @class */function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            _this.setState({ displayColorPicker: !_this.state.displayColorPicker });
        };
        _this.handleClose = function () {
            _this.setState({ displayColorPicker: false });
        };
        _this.handleChangeHsl = function (color) {
            _this.setState({ color: color.hsl });
        };
        _this.handleChangeRgb = function (color) {
            _this.setState({ color: color.rgb });
        };
        _this.state = {
            displayColorPicker: false,
            color: _this.props.value || 'red'
        };
        return _this;
    }
    ColorPicker.prototype.getColorPicker = function (hs, backgroundColor) {
        if (hs) {
            return _react2.default.createElement(_reactColor.ChromePicker, { color: backgroundColor, onChange: this.handleChangeHsl, onChangeComplete: this.props.onChange });
        }
        return _react2.default.createElement(_reactColor.SketchPicker, { color: backgroundColor, onChange: this.handleChangeRgb, onChangeComplete: this.props.onChange });
    };
    ColorPicker.prototype.render = function () {
        var _this = this;
        var backgroundColor = 'blue';
        if (this.props.hs) {
            backgroundColor = 'hsl(20, 100%, 50%)';
            if (this.state.color) {
                if (typeof this.state.color === 'string') {
                    backgroundColor = this.state.color;
                } else {
                    if (!this.state.color.h) {
                        return _react2.default.createElement(_bluerainOs.BlueRainConsumer, null, function (BR) {
                            return _react2.default.createElement(_Paper2.default, { elevation: 2 }, _react2.default.createElement(BR.Components.Text, { style: _pickerStyles.styles.handleError }, '"Error: Pass prop "value" in hsl format as prop "hs" is true, demanding hsl values."'));
                        });
                    }
                    var bgS = (this.state.color.s || 0.5) * 100;
                    var bgL = (this.state.color.l || 0.5) * 100;
                    backgroundColor = "hsl(" + this.state.color.h + ", " + bgS + "%, " + bgL + "%)";
                }
            }
        } else if (this.state.color) {
            backgroundColor = typeof this.state.color === 'string' ? this.state.color : "rgba(" + this.state.color.r + ", " + this.state.color.g + ", " + this.state.color.b + ", " + this.state.color.a + ")";
        }
        return _react2.default.createElement(_bluerainOs.BlueRainConsumer, null, function (BR) {
            return _react2.default.createElement(BR.Components.View, { style: _pickerStyles.styles.colorControl }, _react2.default.createElement(BR.Components.Text, null, _this.props.label), _react2.default.createElement(BR.Components.View, { style: _pickerStyles.styles.onLeft }, _react2.default.createElement(_Paper2.default, { elevation: 2, style: _pickerStyles.styles.padding5 }, _react2.default.createElement(_Button2.default, { raised: true, style: { display: 'flex', justifyContent: 'center', backgroundColor: backgroundColor, minHeight: 14, minWidth: 36 }, onClick: _this.handleClick }), _this.state.displayColorPicker ? _react2.default.createElement(_Paper2.default, { elevation: 2 }, _react2.default.createElement(BR.Components.View, { style: _pickerStyles.styles.popover }, _react2.default.createElement(BR.Components.View, { style: _pickerStyles.styles.cover }), _this.getColorPicker(_this.props.hs, backgroundColor))) : null)));
        });
    };
    return ColorPicker;
}(_react2.default.Component);
exports.ColorPicker = ColorPicker;
//# sourceMappingURL=ColorPicker.component.js.map