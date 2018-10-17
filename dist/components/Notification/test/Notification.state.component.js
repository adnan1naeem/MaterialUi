'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Notification = require('../Notification.Components');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

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

var PositionedSnackbar = /** @class */function (_super) {
    __extends(PositionedSnackbar, _super);
    function PositionedSnackbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false,
            vertical: 7,
            horizontal: 8
        };
        _this.handleClick = function (state) {
            return function () {
                _this.setState(__assign({ open: true }, state));
            };
        };
        _this.handleClose = function () {
            _this.setState({ open: false });
        };
        return _this;
    }
    PositionedSnackbar.prototype.render = function () {
        var _a = this.state,
            vertical = _a.vertical,
            horizontal = _a.horizontal,
            open = _a.open;
        var obj = { horizontal: horizontal, vertical: vertical };
        return _react2.default.createElement("div", null, _react2.default.createElement(_Button2.default, { onClick: this.handleClick({ vertical: 'top', horizontal: 'center' }) }, "Top-Center"), _react2.default.createElement(_Button2.default, { onClick: this.handleClick({ vertical: 'top', horizontal: 'right' }) }, "Top-Right"), _react2.default.createElement(_Button2.default, { onClick: this.handleClick({ vertical: 'bottom', horizontal: 'right' }) }, "Bottom-Right"), _react2.default.createElement(_Button2.default, { onClick: this.handleClick({ vertical: 'bottom', horizontal: 'center' }) }, "Bottom-Center"), _react2.default.createElement(_Button2.default, { onClick: this.handleClick({ vertical: 'bottom', horizontal: 'left' }) }, "Bottom-Left"), _react2.default.createElement(_Button2.default, { onClick: this.handleClick({ vertical: 'top', horizontal: 'left' }) }, "Top-Left"), _react2.default.createElement(_Notification.Notification, { anchorOrigin: obj, open: open, onClose: this.handleClose, SnackbarContentProps: {
                'aria-describedby': 'message-id'
            }, message: _react2.default.createElement("span", { id: "message-id" }, "I love snacks") }));
    };
    return PositionedSnackbar;
}(_react2.default.Component);
exports.default = PositionedSnackbar;
//# sourceMappingURL=Notification.state.component.js.map