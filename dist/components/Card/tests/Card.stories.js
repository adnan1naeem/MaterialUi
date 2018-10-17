'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Card = require('../../Card');

var _addonKnobs = require('@storybook/addon-knobs');

var _react2 = require('@storybook/react');

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _bluerainOs = require('@blueeast/bluerain-os');

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _PlayArrow = require('material-ui-icons/PlayArrow');

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _SkipNext = require('material-ui-icons/SkipNext');

var _SkipNext2 = _interopRequireDefault(_SkipNext);

var _SkipPrevious = require('material-ui-icons/SkipPrevious');

var _SkipPrevious2 = _interopRequireDefault(_SkipPrevious);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Text = _bluerainOs2.default.Components.get('Text');
var label = (0, _addonKnobs.text)('label as child', React.createElement(Text, null, "WithKnobs"));
(0, _react2.storiesOf)('Card', module).add('Card with style, className and raised props', function () {
    return React.createElement(_Card.Card, { raised: true, style: { backgroundColor: 'brown' }, className: "bg-main" }, "Raised");
});
(0, _react2.storiesOf)('Card', module).add('Card and raised prop false', function () {
    return React.createElement(_Card.Card, { raised: false, style: { backgroundColor: 'orange' }, className: "bg-main" }, "UnRaised success ");
});
(0, _react2.storiesOf)('Card', module).add('Card with children and tag props', function () {
    return React.createElement(_Card.Card, { style: { maxWidth: 100 }, tag: _Card.CardHeader }, " ", label, " ");
});
(0, _react2.storiesOf)('Card', module).add('Card with square, tag as Text and elevation as 12 props', function () {
    return React.createElement(_Card.Card, { style: { maxWidth: 100 }, tag: Text, square: true, elevation: 12 }, " ", label, " ");
});
(0, _react2.storiesOf)('BluerainCard', module).add('MaterialUI story for music card', function () {
    return React.createElement(_Card.Card, { style: { width: 350, display: 'flex' } }, React.createElement("div", null, React.createElement(_Card.CardBody, null, React.createElement("h4", null, "Live From Space"), React.createElement("h5", { style: { color: 'green' } }, "Mac Miller")), React.createElement("div", null, React.createElement(_IconButton2.default, { "aria-label": "Previous" }, React.createElement(_SkipNext2.default, null)), React.createElement(_IconButton2.default, { "aria-label": "Play/pause" }, React.createElement(_PlayArrow2.default, null)), React.createElement(_IconButton2.default, { "aria-label": "Next" }, React.createElement(_SkipPrevious2.default, null)))), React.createElement(_Card.CardMedia, { src: "https://material-ui-next.com/static/images/cards/live-from-space.jpg", style: { width: 200 }, height: 200 }));
});
(0, _react2.storiesOf)('BluerainCard', module).add('MaterialUI basic Card', function () {
    return React.createElement(_Card.Card, { style: { maxWidth: 275 } }, React.createElement(_Card.CardBody, null, React.createElement(_Typography2.default, { style: { marginBottom: 16, fontSize: 14 } }, "Word of the Day"), React.createElement(_Typography2.default, { type: "headline", component: "h2" }, "benevolent"), React.createElement(_Typography2.default, { style: { marginBottom: 12 } }, "adjective"), React.createElement(_Typography2.default, { component: "p" }, "well meaning and kindly.", React.createElement("br", null), '"a benevolent smile"')), React.createElement(_Card.CardFooter, null, React.createElement(_Button2.default, { dense: true }, "Learn More")));
});
(0, _react2.storiesOf)('BluerainCard', module).add('MaterialUI Card with all subcomponents', function () {
    return React.createElement(_Card.Card, { style: { width: 350 } }, React.createElement(_Card.CardHeader, { avatar: React.createElement(_Avatar2.default, { "aria-label": "Recipe" }, "R"), action: React.createElement(_IconButton2.default, null, React.createElement(_PlayArrow2.default, null)), title: "Shrimp and Chorizo Paella", subheader: "September 14, 2016" }), React.createElement(_Card.CardMedia, { src: "https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg", height: 200 }), React.createElement(_Card.CardBody, null, React.createElement(_Typography2.default, { type: "headline", component: "h2" }, "Lizard"), React.createElement(_Typography2.default, { component: "p" }, "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica")), React.createElement(_Card.CardFooter, null, React.createElement(_Button2.default, { dense: true, color: "primary" }, "Share"), React.createElement(_Button2.default, { dense: true, color: "primary" }, "Learn More")));
});
//# sourceMappingURL=Card.stories.js.map