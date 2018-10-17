'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Button = require('../../Button');

var _react2 = require('@storybook/react');

var _ModalFooter = require('../ModalFooter.Component');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Modal', module);
stories.add('ModalFooter', function () {
    var Handler = function Handler() {
        alert('clicked');
    };
    return React.createElement(_ModalFooter2.default, null, React.createElement(_Button.Button, { onPress: Handler, color: "primary" }, "Agree"), React.createElement(_Button.Button, { onPress: Handler, color: "primary" }, "Disagree"));
});
//# sourceMappingURL=ModalFooter.stories.js.map