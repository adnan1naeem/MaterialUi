'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _List = require('../../List');

var _react2 = require('@storybook/react');

var _Folder = require('material-ui-icons/Folder');

var _Folder2 = _interopRequireDefault(_Folder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _react2.storiesOf)('ListItemIcon', module).add('ListItemIcon with Icon as child', function () {
    return React.createElement(_List.ListItemIcon, null, React.createElement(_Folder2.default, null));
});
//# sourceMappingURL=ListItemIcon.stories.js.map