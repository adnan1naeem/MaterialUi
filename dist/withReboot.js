'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withReboot = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Reboot = require('material-ui/Reboot');

var _Reboot2 = _interopRequireDefault(_Reboot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withReboot = function withReboot(Component) {
  return function (props) {
    return _react2.default.createElement(_Reboot2.default, null, props.children);
  };
};
exports.withReboot = withReboot;
//# sourceMappingURL=withReboot.js.map