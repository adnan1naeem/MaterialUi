'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _List = require('../../List');

var _react2 = require('@storybook/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _react2.storiesOf)('ListItemAvatar', module).add('ListItemAvatar with size 800 and src props', function () {
  return React.createElement(_List.ListItemAvatar, { src: "https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg", size: 800 });
});
(0, _react2.storiesOf)('ListItemAvatar', module).add('ListItemAvatar with size and src props', function () {
  return React.createElement(_List.ListItemAvatar, { src: "https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg", size: 30 });
});
//# sourceMappingURL=ListItemAvatar.stories.js.map