'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Card = require('material-ui/Card');

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
 * The props of CardMedia Component
 * @param {Object} props.style style object for Card's style.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 * @param {number} props.height height of the image.
 */
var BlueRainCardMedia = function BlueRainCardMedia(props) {
    var heightedStyle = __assign({}, props.style, { height: props.height || 200 });
    return React.createElement(_Card.CardMedia, __assign({ style: heightedStyle, image: props.src, src: props.src }, props));
};
exports.default = BlueRainCardMedia;
//# sourceMappingURL=CardMedia.component.js.map