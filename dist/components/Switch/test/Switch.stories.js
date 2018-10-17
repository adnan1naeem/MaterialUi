'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _Switch = require('../../Switch');

var _addonActions = require('@storybook/addon-actions');

var _react2 = require('@storybook/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Switch', module);
stories.add('Switch (with knobs)', function () {
    var disabled = (0, _addonKnobs.boolean)('disabled', false);
    var value = (0, _addonKnobs.boolean)('value', true);
    return React.createElement(_Switch.Switch, { disabled: disabled, value: value, onValueChange: (0, _addonActions.action)('Value is', value) });
});
stories.add('Switch (default)', function () {
    return React.createElement(_Switch.Switch, null);
});
stories.add('Switch (MUI specific props)', function () {
    return React.createElement("div", { style: { display: 'flex' } }, React.createElement(_Switch.Switch, { "aria-label": "checkedD" }), React.createElement(_Switch.Switch, { checked: true, onChange: (0, _addonActions.action)('Value is changed!'), "aria-label": "checkedD" }));
});
//# sourceMappingURL=Switch.stories.js.map