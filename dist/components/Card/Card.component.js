'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

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

var BlueRainCard = function BlueRainCard(props) {
    return _react2.default.createElement(_Card2.default, __assign({}, props, { raised: props.raised, style: props.style, component: typeof props.tag === 'string' ? props.tag : 'div', className: props.className }), props.children);
};
exports.default = BlueRainCard;
//# sourceMappingURL=Card.component.js.map