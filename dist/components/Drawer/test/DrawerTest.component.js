'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawerTest = undefined;

var _bluerainOs = require('@blueeast/bluerain-os');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Drawer = require('../../Drawer');

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
// import { Button } from '../../Button';

var DrawerTest = /** @class */function (_super) {
    __extends(DrawerTest, _super);
    function DrawerTest(props) {
        var _this = _super.call(this, props) || this;
        _this.side = 'left';
        _this.state = {
            open: true
        };
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }
    DrawerTest.prototype.onClose = function () {
        console.log('onClose Activated');
    };
    DrawerTest.prototype.render = function () {
        var _this = this;
        return _react2.default.createElement(_bluerainOs.BlueRainConsumer, null, function (BR) {
            return _react2.default.createElement(BR.Components.View, null, _react2.default.createElement(_Drawer.Drawer, { variant: _this.props.variant, open: _this.state.open, tweenDuration: 500, side: _this.side, onClose: function onClose() {
                    _this.setState({ open: false });
                }, elevation: 200 }, _react2.default.createElement(_Button2.default, { color: 'primary', onClick: function onClick() {
                    _this.setState({ open: false });
                } }, "Click to Close")), _react2.default.createElement(BR.Components.View, null, _react2.default.createElement(BR.Components.Text, null, "Hello World"), _react2.default.createElement(_Button2.default, { color: 'primary', onClick: function onClick() {
                    _this.side = 'left';_this.setState({ open: true });
                } }, "Left"), _react2.default.createElement(_Button2.default, { color: 'primary', onClick: function onClick() {
                    _this.side = 'right';_this.setState({ open: true });
                } }, "Right"), _react2.default.createElement(_Button2.default, { color: 'primary', onClick: function onClick() {
                    _this.side = 'top';_this.setState({ open: true });
                } }, "Top"), _react2.default.createElement(_Button2.default, { color: 'primary', onClick: function onClick() {
                    _this.side = 'bottom';_this.setState({ open: true });
                } }, "Bottom")));
        });
    };
    return DrawerTest;
}(_react2.default.Component);
exports.DrawerTest = DrawerTest;
exports.default = DrawerTest;
//# sourceMappingURL=DrawerTest.component.js.map