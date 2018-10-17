'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _ColorPicker = require('../../ColorPicker');

var _react2 = require('@storybook/react');

var _bluerainOs = require('@blueeast/bluerain-os');

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Text = _bluerainOs2.default.Components.get('Text');
var rgbaAndHsl = { r: 255, g: 247, b: 109, a: 100, h: 180, s: 0.5, l: 0.5 };
var hsl = { h: 180, s: 0.5, l: 0.5 };
function handleTextInputChange() {
    console.log('ColorPicker value changed');
}
(0, _react2.storiesOf)('ColorPicker', module).add('all Props', function () {
    return React.createElement(_ColorPicker.ColorPicker, { value: rgbaAndHsl, hs: false, onChange: handleTextInputChange, label: "Picker" });
});
(0, _react2.storiesOf)('ColorPicker', module).add('with hsl value', function () {
    return React.createElement(_ColorPicker.ColorPicker, { value: hsl, hs: true, label: "HSL" });
});
(0, _react2.storiesOf)('ColorPicker', module).add('with # code', function () {
    return React.createElement(_ColorPicker.ColorPicker, { value: "#2AF795", hs: false, label: "#Code" });
});
(0, _react2.storiesOf)('ColorPicker', module).add('with violet as value', function () {
    return React.createElement(_ColorPicker.ColorPicker, { value: "violet", hs: false, label: "string" });
});
(0, _react2.storiesOf)('ColorPicker', module).add('with no value', function () {
    return React.createElement(_ColorPicker.ColorPicker, { hs: false, label: "no value given" });
});
//# sourceMappingURL=ColorPicker.stories.js.map