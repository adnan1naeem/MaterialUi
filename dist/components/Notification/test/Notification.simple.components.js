'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleSnackbar = undefined;

var _Notification = require('../Notification.Components');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

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

var styles = function styles(theme) {
    return {
        close: {
            width: theme.spacing.unit * 4,
            height: theme.spacing.unit * 4
        }
    };
};
var SimpleSnackbar = /** @class */function (_super) {
    __extends(SimpleSnackbar, _super);
    function SimpleSnackbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false
        };
        _this.handleClick = function () {
            _this.setState({ open: true });
        };
        _this.handleClose = function () {
            _this.setState({ open: false });
        };
        return _this;
    }
    SimpleSnackbar.prototype.render = function () {
        return _react2.default.createElement("div", null, _react2.default.createElement(_Button2.default, { onClick: this.handleClick }, "Open simple snackbar"), _react2.default.createElement(_Notification.Notification, { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
            }, open: this.state.open, autoHideDuration: 6000, onClose: this.handleClose, SnackbarContentProps: {
                'aria-describedby': 'message-id'
            }, message: _react2.default.createElement("span", { id: "message-id" }, "Note archived"), action: [_react2.default.createElement(_Button2.default, { key: "undo" }, "UNDO"), _react2.default.createElement(_IconButton2.default, { key: "close", "aria-label": "Close", color: "inherit", onClick: this.handleClose }, _react2.default.createElement(_Close2.default, null))] }));
    };
    return SimpleSnackbar;
}(_react2.default.Component);
exports.SimpleSnackbar = SimpleSnackbar;
//# sourceMappingURL=Notification.simple.components.js.map