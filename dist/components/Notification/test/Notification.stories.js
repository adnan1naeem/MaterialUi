'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _index = require('../index');

var _NotificationSimple = require('./Notification.simple.components');

var _react2 = require('@storybook/react');

var _NotificationState = require('./Notification.state.component');

var _NotificationState2 = _interopRequireDefault(_NotificationState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Notification', module);
stories.add('Notification', function () {
    return React.createElement(_index.Notification, { open: function open() {
            return console.log('open');
        }, onClose: function onClose() {
            return console.log('open');
        }, transition: '', SnackbarContentProps: { 'aria-describedby': 'message-id' }, text: React.createElement("span", { id: "message-id" }, "I love snacks") });
});
stories.add('Postioned snackbar', function () {
    return React.createElement("div", null, React.createElement(_NotificationState2.default, null));
});
stories.add(' SimpleSnackbar ', function () {
    return React.createElement("div", null, React.createElement(_NotificationSimple.SimpleSnackbar, null));
});
//# sourceMappingURL=Notification.stories.js.map