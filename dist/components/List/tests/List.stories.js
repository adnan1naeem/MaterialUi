'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _List = require('../../List');

var _Avatar = require('../../Avatar');

var _react2 = require('@storybook/react');

var _bluerainOs = require('@blueeast/bluerain-os');

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Drafts = require('material-ui-icons/Drafts');

var _Drafts2 = _interopRequireDefault(_Drafts);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Inbox = require('material-ui-icons/Inbox');

var _Inbox2 = _interopRequireDefault(_Inbox);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Text = _bluerainOs2.default.Components.get('Text');
var Image = _bluerainOs2.default.Components.get('Image');
var View = _bluerainOs2.default.Components.get('View');
(0, _react2.storiesOf)('List', module).add('List with style and raised props', function () {
    return React.createElement(_List.List, { style: { width: '100%', height: 300 }, className: "bg-main" }, "Raised");
});
(0, _react2.storiesOf)('List', module).add('List of MUI-1', function () {
    return React.createElement(_Paper2.default, null, React.createElement(_List.List, null, React.createElement(_List.ListItem, { button: true }, React.createElement(_List.ListItemIcon, null, React.createElement(_Inbox2.default, null)), React.createElement(_List.ListItemText, { primary: "Inbox" })), React.createElement(_List.ListItem, { button: true }, React.createElement(_List.ListItemIcon, null, React.createElement(_Drafts2.default, null)), React.createElement(_List.ListItemText, { primary: "Drafts" }))), React.createElement(_Divider2.default, null), React.createElement(_List.List, null, React.createElement(_List.ListItem, { button: true }, React.createElement(_List.ListItemText, { primary: "Trash" })), React.createElement(_List.ListItem, { button: true, component: "a", href: "#simple-list" }, React.createElement(_List.ListItemText, { primary: "Spam" }))));
});
(0, _react2.storiesOf)('List', module).add('List of MUI-2', function () {
    return React.createElement(_Paper2.default, null, React.createElement(_List.List, null, React.createElement(_List.ListItem, { button: true }, React.createElement(_Avatar.Avatar, { size: 40 }, React.createElement(_Drafts2.default, null)), React.createElement(_List.ListItemText, { primary: "Photos", secondary: "Jan 9, 2016" })), React.createElement(_List.ListItem, { button: true, disabled: true }, React.createElement(_Avatar.Avatar, null, React.createElement(_Drafts2.default, null)), React.createElement(_List.ListItemText, { primary: "Work", secondary: "Jan 7, 2016" }))));
});
(0, _react2.storiesOf)('List', module).add('List of MUI-4', function () {
    return React.createElement(_Paper2.default, null, React.createElement(_List.List, { dense: true, subheader: React.createElement(_List.ListHeader, null, "Heading1") }, React.createElement(_List.ListItem, { button: true }, React.createElement(_List.ListItemAvatar, null, React.createElement(_Avatar.Avatar, null, React.createElement(_Drafts2.default, null))), React.createElement(_List.ListItemText, { primary: "Single-line item", secondary: "Secondary text" }), React.createElement(_List.ListItemRightButton, null, React.createElement(_IconButton2.default, { "aria-label": "Delete" }, React.createElement(_Drafts2.default, null))))));
});
//# sourceMappingURL=List.stories.js.map