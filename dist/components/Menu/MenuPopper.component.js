'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactPopper = require('react-popper');

var _Menu = require('../Menu');

var _Menu2 = require('material-ui/Menu');

var _ClickAwayListener = require('material-ui/utils/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Grow = require('material-ui/transitions/Grow');

var _Grow2 = _interopRequireDefault(_Grow);

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
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var MenuPopper = /** @class */function (_super) {
    __extends(MenuPopper, _super);
    function MenuPopper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target1 = '';
        _this.state = {
            anchorEl: null
        };
        _this.handleOpen = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
        };
        _this.handleClose = function (event, onClick) {
            if (_this.target1.contains(event.target)) {
                return;
            }
            onClick ? onClick() : console.log('No Click functionality passed');
            _this.setState({ anchorEl: null });
        };
        return _this;
    }
    MenuPopper.prototype.render = function () {
        var _this = this;
        var anchorEl = this.state.anchorEl;
        return _react2.default.createElement("div", { style: this.props.style }, _react2.default.createElement(_reactPopper.Manager, null, _react2.default.createElement(_reactPopper.Target, null, _react2.default.createElement("div", { ref: function ref(node) {
                _this.target1 = node;
            } }, this.props.component ? this.props.component(this.handleOpen) : null)), _react2.default.createElement(_reactPopper.Popper, { placement: this.props.placement, eventsEnabled: Boolean(anchorEl) }, _react2.default.createElement(_ClickAwayListener2.default, { onClickAway: this.handleClose }, _react2.default.createElement(_Grow2.default, { in: Boolean(anchorEl), style: { transformOrigin: '0 0 0' } }, _react2.default.createElement(_Paper2.default, __assign({}, this.props.paperProps), _react2.default.createElement(_Menu2.MenuList, __assign({ role: "menu" }, this.props.menuListProps), this.props.menuItems && Boolean(anchorEl) ? this.props.menuItems.map(function (each) {
            return _react2.default.createElement(_Menu.MenuItem, __assign({ onClick: function onClick(e) {
                    return _this.handleClose(e, each.onClick);
                }, style: each.style }, each.otherProps), each.title);
        }) : null)))))));
    };
    return MenuPopper;
}(_react2.default.Component);
exports.default = MenuPopper;
//# sourceMappingURL=MenuPopper.component.js.map