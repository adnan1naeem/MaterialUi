'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluerainOs = require('@blueeast/bluerain-os');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var ScrollViewComponent = function ScrollViewComponent(props) {
    return _react2.default.createElement(_bluerainOs.BlueRainConsumer, null, function (BR) {
        return _react2.default.createElement(BR.Components.View, __assign({}, props));
    });
};
exports.default = ScrollViewComponent;
//# sourceMappingURL=index.js.map