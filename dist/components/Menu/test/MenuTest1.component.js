'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _List = require('../../List');

var _Menu = require('../../Menu');

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

// import Button from 'material-ui/Button';
// import Fade from 'material-ui/transitions/Fade';
var FadeMenu = /** @class */function (_super) {
    __extends(FadeMenu, _super);
    function FadeMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
            anchorEl2: null
        };
        _this.handleClick = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
            _this.setState({ anchorEl2: event.currentTarget });
        };
        _this.handleClose = function () {
            _this.setState({ anchorEl: null });
            _this.setState({ anchorEl2: null });
        };
        return _this;
    }
    FadeMenu.prototype.render = function () {
        var _a = this.state,
            anchorEl = _a.anchorEl,
            anchorEl2 = _a.anchorEl2;
        return _react2.default.createElement("div", null, _react2.default.createElement("div", null, _react2.default.createElement(_List.ListItem, { button: true, onClick: this.handleClick, style: { width: 150 }, "aria-controls": "fade-menu" }, "Hello"), _react2.default.createElement(_Menu.Menu, { id: "fade-menu", anchorEl: anchorEl !== null ? anchorEl : undefined, open: Boolean(anchorEl), onClose: this.handleClose }, _react2.default.createElement(_Menu.MenuItem, { onClick: this.handleClose }, "wow"), _react2.default.createElement(_Menu.MenuItem, { onClick: this.handleClose }, "My account"), _react2.default.createElement(_Menu.MenuItem, { onClick: this.handleClose }, "Logout"))), _react2.default.createElement("div", null, _react2.default.createElement(_List.ListItem, { button: true, onClick: this.handleClick, style: { width: 150 }, "aria-controls": "fade-menu2" }, "Hello"), _react2.default.createElement(_Menu.Menu, { id: "fade-menu2", anchorEl: anchorEl2 !== null ? anchorEl2 : undefined, open: Boolean(anchorEl2), onClose: this.handleClose }, _react2.default.createElement(_Menu.MenuItem, { onClick: this.handleClose }, "Profdasile"), _react2.default.createElement(_Menu.MenuItem, { onClick: this.handleClose }, "My account"), _react2.default.createElement(_Menu.MenuItem, { onClick: this.handleClose }, "Logout"))));
    };
    return FadeMenu;
}(_react2.default.Component);
exports.default = FadeMenu;
//# sourceMappingURL=MenuTest1.component.js.map