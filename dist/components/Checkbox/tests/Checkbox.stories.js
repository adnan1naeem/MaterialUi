'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonActions = require('@storybook/addon-actions');

var _react2 = require('@storybook/react');

var _bluerainOs = require('@blueeast/bluerain-os');

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

var _Checkbox = require('../../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Text = _bluerainOs2.default.Components.get('Text');
function handleTextInputChange(value) {
    console.log('Checkbox value', value);
}
(0, _react2.storiesOf)('Checkbox', module).add('disabled', function () {
    return React.createElement(_Checkbox2.default, { label: "disabled", color: "default", disabled: true, value: true });
});
(0, _react2.storiesOf)('Checkbox', module).add('with onPress', function () {
    return React.createElement(_Checkbox2.default, { label: "with onPress", onChange: (0, _addonActions.action)('I was pressed'), color: "contrast", value: true });
});
(0, _react2.storiesOf)('Checkbox', module).add('with label as Node', function () {
    return React.createElement(_Checkbox2.default, { label: React.createElement(Text, null, "I am a text in Node"), onChange: (0, _addonActions.action)('I was pressed'), color: "accent" });
});
(0, _react2.storiesOf)('Checkbox', module).add('with indeterminate', function () {
    return React.createElement(_Checkbox2.default, { label: React.createElement(Text, null, "I am a text in Node"), onChange: (0, _addonActions.action)('I was pressed'), color: "primary", indeterminate: true });
});
//# sourceMappingURL=Checkbox.stories.js.map