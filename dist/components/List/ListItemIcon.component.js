'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _materialUi = require('material-ui');

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

/**
 * The props of ListItemIcon Component
 * @param {Object} props.style style object for ListItemIcon's style.
 * @param {Node} props.children children of ListItemIcon.
 */
var BlueRainListItemIcon = function BlueRainListItemIcon(props) {
    return React.createElement(_materialUi.ListItemIcon, __assign({}, props), props.children);
};
exports.default = BlueRainListItemIcon;
//# sourceMappingURL=ListItemIcon.component.js.map