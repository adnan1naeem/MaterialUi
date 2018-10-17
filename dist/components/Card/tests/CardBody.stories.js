'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Card = require('../../Card');

var _react2 = require('@storybook/react');

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _react2.storiesOf)('CardBody', module).add('CardBody with style and children props', function () {
    return React.createElement(_Card.CardBody, { style: { width: 200, height: 200, backgroundColor: 'white' } }, React.createElement(_Card.CardHeader, { avatar: React.createElement(_Avatar2.default, { "aria-label": "Recipe" }, "R"), title: "Shrimp and Chorizo Paella", subheader: "September 14, 2016" }));
});
(0, _react2.storiesOf)('CardBody', module).add('CardMedia with className and style prop', function () {
    return React.createElement(_Card.CardBody, { className: "CardMedia Title", style: { width: 500, backgroundColor: 'orange' } }, React.createElement(_Typography2.default, { style: { marginBottom: 16, fontSize: 14 } }, "Word of the Day"), React.createElement(_Typography2.default, { type: "headline", component: "h2" }, "benevolent"), React.createElement(_Typography2.default, { style: { marginBottom: 12 } }, "adjective"), React.createElement(_Typography2.default, { component: "p" }, "well meaning and kindly.", React.createElement("br", null), '"a benevolent smile"'));
});
//# sourceMappingURL=CardBody.stories.js.map