'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _react2 = require('@storybook/react');

var _ModalBody = require('../ModalBody.Component');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Modal', module);
stories.add('ModalBody', function () {
    return React.createElement(_ModalBody2.default, null, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.");
});
//# sourceMappingURL=ModalBody.stories.js.map