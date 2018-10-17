'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _Divider = require('../../Divider');

var _react2 = require('@storybook/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Divider', module);
stories.add('Divider (with knobs)', function () {
    var light = (0, _addonKnobs.boolean)('light prop', false);
    return React.createElement("div", { style: { padding: 20, backgroundColor: 'white' } }, React.createElement(_Divider.Divider, { light: light }));
});
stories.add('Divider (with MUI Props)', function () {
    return React.createElement("div", { style: { padding: 20, backgroundColor: 'white' } }, React.createElement(_Divider.Divider, { light: false, inset: true }));
});
//# sourceMappingURL=Divider.stories.js.map