'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _Badge = require('../../Badge');

var _react2 = require('@storybook/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Badge', module);
stories.add('Badge (with knobs)', function () {
    var content = (0, _addonKnobs.text)('content', 'abc');
    var colour = (0, _addonKnobs.text)('color', 'primary');
    return React.createElement(_Badge.Badge, { badgeContent: content, color: colour });
});
stories.add('Badge (withOut knobs)', function () {
    return React.createElement(_Badge.Badge, { badgeContent: 123, color: 'accent' });
});
//# sourceMappingURL=Badge.stories.js.map