'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlueRainAppBar = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _bluerainOs = require('@blueeast/bluerain-os');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var BlueRainAppBar = exports.BlueRainAppBar = function BlueRainAppBar(props) {
    return React.createElement(_bluerainOs.BlueRainConsumer, null, function (BR) {
        return React.createElement(_AppBar2.default, __assign({}, props, { style: props.style ? props.style : { position: 'sticky' } }), React.createElement(_Toolbar2.default, null, props.children));
    });
};
//# sourceMappingURL=AppBar.component.js.map