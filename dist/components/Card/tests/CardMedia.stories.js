'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Card = require('../../Card');

var _react2 = require('@storybook/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _react2.storiesOf)('CardMedia', module).add('CardMedia with src and height:400 prop', function () {
    return React.createElement(_Card.CardMedia, { height: 400, src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" });
});
(0, _react2.storiesOf)('CardMedia', module).add('CardMedia with className prop', function () {
    return React.createElement(_Card.CardMedia, { className: "bg-img", height: 40, src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" });
});
(0, _react2.storiesOf)('CardMedia', module).add('CardMedia with style prop', function () {
    return React.createElement(_Card.CardMedia, { src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" });
});
//# sourceMappingURL=CardMedia.stories.js.map