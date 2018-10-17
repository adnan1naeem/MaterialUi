'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _Chip = require('../../Chip');

var _addonActions = require('@storybook/addon-actions');

var _colorManipulator = require('material-ui/styles/colorManipulator');

var _react2 = require('@storybook/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var color = (0, _colorManipulator.emphasize)('#fff', 0);
var backgroundColor = (0, _colorManipulator.emphasize)('#0f0', 0);
var chipDefaultStyle = { 'background-color': backgroundColor, 'color': color };
var stories = (0, _react2.storiesOf)('Chip', module);
stories.add('Chip with default value', function () {
    return React.createElement(_Chip.Chip, null, "12 % off");
});
stories.add('Chip with style', function () {
    // const styleProps = {'background-color': backgroundColor};
    var style = (0, _addonKnobs.object)('Style of Chip', chipDefaultStyle);
    var content = (0, _addonKnobs.text)('Text', '10 % off');
    return React.createElement(_Chip.Chip, { style: style }, content);
});
stories.add('Chip Onclick', function () {
    var style = (0, _addonKnobs.object)('Style of Chip', chipDefaultStyle);
    var content = (0, _addonKnobs.text)('Text', '10 % off');
    return React.createElement(_Chip.Chip, { style: style, onClick: (0, _addonActions.action)('Chip clicked') }, content);
});
stories.add('Chip without knobs', function () {
    return React.createElement(_Chip.Chip, { style: chipDefaultStyle }, "10 % off");
});
//# sourceMappingURL=Chip.stories.js.map