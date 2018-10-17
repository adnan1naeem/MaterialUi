'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _react2 = require('@storybook/react');

var _ModalHeader = require('../ModalHeader.Component');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Modal', module);
stories.add('ModalHeader', function () {
    return React.createElement(_ModalHeader2.default, null, "UserLocation Service");
});
//# sourceMappingURL=ModalHeader.stories.js.map