'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _List = require('../../List');

var _react2 = require('@storybook/react');

var _bluerainOs = require('@blueeast/bluerain-os');

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Text = _bluerainOs2.default.Components.get('Text');
var Image = _bluerainOs2.default.Components.get('Image');
var label = (0, _addonKnobs.text)('label as child', 'with knobs');
(0, _react2.storiesOf)('ListItemText', module).add('ListItemText with text as child', function () {
  return React.createElement(_List.ListItemText, null, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
});
(0, _react2.storiesOf)('ListItemText', module).add('ListItemText with primary as child and secondary in secondary prop', function () {
  return React.createElement(_List.ListItemText, { secondary: "I Am Secondary Text" }, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
});
//# sourceMappingURL=ListItemText.stories.js.map