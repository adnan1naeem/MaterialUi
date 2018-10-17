'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _FormControl = require('../../FormControl');

var _Form = require('material-ui/Form');

var _TextInput = require('../../TextInput');

var _react2 = require('@storybook/react');

var _bluerainOs = require('@blueeast/bluerain-os');

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Text = _bluerainOs2.default.Components.get('Text');
var Image = _bluerainOs2.default.Components.get('Image');
var View = _bluerainOs2.default.Components.get('View');
(0, _react2.storiesOf)('FormControl', module).add('FormControl with style and raised props', function () {
    return React.createElement(_FormControl.FormControl, { style: { width: '100%', height: 300 }, className: "bg-main" }, "Raised");
});
(0, _react2.storiesOf)('FormControl', module).add('MaterialUI example 1', function () {
    return React.createElement(_Paper2.default, { style: { padding: 20 } }, React.createElement(_FormControl.FormControl, { fullWidth: true }, React.createElement(_TextInput.TextInput, { label: "amount", id: "adornment-amount" })));
});
(0, _react2.storiesOf)('FormControl', module).add('MaterialUI example 2', function () {
    return React.createElement(_Paper2.default, { style: { padding: 20 } }, React.createElement(_FormControl.FormControl, null, React.createElement(_FormControl.FormGroup, null, React.createElement(_TextInput.TextInput, { label: "Input with success" }), React.createElement(Text, null, "Example help text that remains unchanged.")), React.createElement(_FormControl.FormGroup, null, React.createElement(_TextInput.TextInput, { label: "Input with danger", error: true, errorText: 'Example help text that remains unchanged.' }))));
});
(0, _react2.storiesOf)('FormControl', module).add('MaterialUI example 3', function () {
    return React.createElement(_Paper2.default, { style: { padding: 20 } }, React.createElement(_FormControl.FormGroup, { row: true }, React.createElement(_Form.FormControlLabel, { control: React.createElement(_Checkbox2.default, { value: "checkedA" }), label: "Option A" }), React.createElement(_Form.FormControlLabel, { control: React.createElement(_Checkbox2.default, { value: "checkedB" }), label: "Option B" }), React.createElement(_Form.FormControlLabel, { control: React.createElement(_Checkbox2.default, { value: "checkedC" }), label: "Option C" }), React.createElement(_Form.FormControlLabel, { disabled: true, control: React.createElement(_Checkbox2.default, { value: "checkedD" }), label: "Disabled" }), React.createElement(_Form.FormControlLabel, { disabled: true, control: React.createElement(_Checkbox2.default, { checked: true, value: "checkedE" }), label: "Disabled" }), React.createElement(_Form.FormControlLabel, { control: React.createElement(_Checkbox2.default, { value: "checkedF", indeterminate: true }), label: "Indeterminate" }), React.createElement(_Form.FormControlLabel, { control: React.createElement(_Checkbox2.default, { value: "checkedG" }), label: "Custom color" })));
});
//# sourceMappingURL=FormControl.stories.js.map