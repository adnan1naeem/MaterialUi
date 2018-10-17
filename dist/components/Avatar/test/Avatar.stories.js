'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _Avatar = require('../../Avatar');

var _react2 = require('@storybook/react');

var _Assignment = require('material-ui-icons/Assignment');

var _Assignment2 = _interopRequireDefault(_Assignment);

var _Folder = require('material-ui-icons/Folder');

var _Folder2 = _interopRequireDefault(_Folder);

var _Pageview = require('material-ui-icons/Pageview');

var _Pageview2 = _interopRequireDefault(_Pageview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Avatar', module);
stories.add('Avatar (with knobs)', function () {
    var content = (0, _addonKnobs.text)('content', 'Remy Sharp');
    var colour = (0, _addonKnobs.text)('color', 'green');
    var size = (0, _addonKnobs.number)('size', 400);
    return React.createElement(_Avatar.Avatar, { alt: content, src: "https://material-ui-next.com/static/images/remy.jpg", size: size, style: { backgroundColor: colour } });
});
stories.add('Avatar (withOut knobs)', function () {
    return React.createElement(_Avatar.Avatar, { alt: "Adelle Charles", src: "https://material-ui-next.com/static/images/uxceo-128.jpg", style: { height: 70, width: 70 } });
});
stories.add('Avatar (with Icons)', function () {
    return React.createElement("div", { style: { display: 'flex' } }, React.createElement(_Avatar.Avatar, { style: { backgroundColor: 'pink' } }, React.createElement(_Folder2.default, null)), React.createElement(_Avatar.Avatar, { style: { backgroundColor: 'grey' } }, React.createElement(_Pageview2.default, null)), React.createElement(_Avatar.Avatar, { style: { backgroundColor: 'green' } }, React.createElement(_Assignment2.default, null)));
});
stories.add('Avatar with text', function () {
    return React.createElement("div", { style: { display: 'flex' } }, React.createElement(_Avatar.Avatar, { style: { backgroundColor: 'grey' } }, "H"), React.createElement(_Avatar.Avatar, { style: { backgroundColor: 'orange' } }, "N"), React.createElement(_Avatar.Avatar, { style: { backgroundColor: 'purple' } }, "OP"));
});
//# sourceMappingURL=Avatar.stories.js.map