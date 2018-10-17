'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _Card = require('../../Card');

var _react2 = require('@storybook/react');

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _bluerainOs = require('@blueeast/bluerain-os');

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _SkipNext = require('material-ui-icons/SkipNext');

var _SkipNext2 = _interopRequireDefault(_SkipNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Text = _bluerainOs2.default.Components.get('Text');
var label = (0, _addonKnobs.text)('label as child', React.createElement(Text, null, "With knobs"));
(0, _react2.storiesOf)('CardHeader', module).add('CardHeader with title as Node and style props', function () {
    return React.createElement(_Card.CardHeader, { style: { width: 300, backgroundColor: 'white' }, title: label });
});
(0, _react2.storiesOf)('CardHeader', module).add('CardHeader with title prop as string', function () {
    return React.createElement(_Card.CardHeader, { title: "Title" });
});
(0, _react2.storiesOf)('CardHeader', module).add('CardHeader with children and title prop ', function () {
    return React.createElement(_Card.CardHeader, { title: "Children" }, React.createElement(_Avatar2.default, { "aria-label": "Recipe", style: { backgroundColor: 'red' } }, "R"), React.createElement(_IconButton2.default, null, React.createElement(_SkipNext2.default, null)), "\"Shrimp and Chorizo Paella\" \"September 14, 2016\"");
});
(0, _react2.storiesOf)('CardHeader', module).add('CardHeader with MUI props', function () {
    return React.createElement(_Card.CardHeader, { avatar: React.createElement(_Avatar2.default, { "aria-label": "Recipe", style: { backgroundColor: 'red' } }, "R"), action: React.createElement(_IconButton2.default, null, React.createElement(_SkipNext2.default, null)), title: "Shrimp and Chorizo Paella", subheader: "September 14, 2016" });
});
//# sourceMappingURL=CardHeader.stories.js.map