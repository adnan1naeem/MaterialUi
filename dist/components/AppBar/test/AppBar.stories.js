'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _AppBar = require('../../AppBar');

var _Button = require('../../Button');

var _react2 = require('@storybook/react');

var _Assignment = require('material-ui-icons/Assignment');

var _Assignment2 = _interopRequireDefault(_Assignment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('AppBar', module);
var AppBarStoriesStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 0
};
stories.add('AppBar with primary color and position="fixed"', function () {
    return React.createElement(_AppBar.AppBar, { position: "fixed", color: "primary", style: { backgroundColor: 'red' } }, React.createElement(_Button.Button, { style: AppBarStoriesStyle }, React.createElement(_Assignment2.default, null)), React.createElement("h3", { style: { display: 'flex', flex: 1 } }, "Title"), React.createElement(_Button.Button, { color: "primary" }, "Login"));
});
stories.add('AppBar with position static and default color', function () {
    return React.createElement(_AppBar.AppBar, { position: "static", color: "default" }, React.createElement(_Button.Button, { style: AppBarStoriesStyle }, React.createElement(_Assignment2.default, null)), React.createElement("h3", { style: { display: 'flex', flex: 1 } }, "Title"), React.createElement(_Button.Button, { color: "default" }, "Login"));
});
stories.add('AppBar with primary color and  position="absolute"', function () {
    return React.createElement(_AppBar.AppBar, { position: "absolute", color: "primary" }, React.createElement(_Button.Button, { style: AppBarStoriesStyle }, React.createElement(_Assignment2.default, null)), React.createElement("h3", { style: { display: 'flex', flex: 1 } }, "Title"), React.createElement(_Button.Button, { color: "secondary" }, "Login"));
});
stories.add('AppBar with accent color', function () {
    return React.createElement(_AppBar.AppBar, { color: "accent" }, React.createElement(_Button.Button, { style: AppBarStoriesStyle }, React.createElement(_Assignment2.default, null)), React.createElement("h3", { style: { display: 'flex', flex: 1 } }, "Title"), React.createElement(_Button.Button, { color: "accent" }, "Login"));
});
//# sourceMappingURL=AppBar.stories.js.map