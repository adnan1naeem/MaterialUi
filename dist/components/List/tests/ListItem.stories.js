'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _List = require('../../List');

var _react2 = require('@storybook/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var okay = function okay() {
    console.log('helo');
};
(0, _react2.storiesOf)('ListItem', module).add('ListItem with tag, href and action props', function () {
    return React.createElement(_List.ListItem, { active: true, onPress: okay }, "Cras justo odio");
});
//# sourceMappingURL=ListItem.stories.js.map