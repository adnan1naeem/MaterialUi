'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _TextInput = require('../../TextInput');

var _react2 = require('@storybook/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function handleTextInputChange(value) {
    console.log('text input value', value.target.value);
}
var labelProps = {
    shrink: true,
    background: 'red'
};
var textFieldClasses = 'margin-left: 100px; margin-right: 100px; width: 50px; background-color: red; padding:100px;';
(0, _react2.storiesOf)('TextInput', module).add('with placeholder, default value, onChange, autoComplete, autoFocus', function () {
    return React.createElement(_TextInput.TextInput, { placeholder: "hello", defaultValue: "nooo", onChange: handleTextInputChange, autoComplete: "Hello World !!", autoFocus: true });
});
(0, _react2.storiesOf)('TextInput', module).add('with id, label, className, onChange, margin', function () {
    return React.createElement(_TextInput.TextInput, { id: "name", label: "Name", className: textFieldClasses, onChange: handleTextInputChange, margin: "dense" });
});
(0, _react2.storiesOf)('TextInput', module).add('with required', function () {
    return React.createElement(_TextInput.TextInput, { required: true, id: "required", label: "Required", defaultValue: "Hello World", className: textFieldClasses, margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('with error true and errorText props', function () {
    return React.createElement(_TextInput.TextInput, { error: true, id: "error", label: "Error", defaultValue: "Hello World", className: textFieldClasses, margin: "normal", errorText: 'Oh Noes, Error!!!' });
});
(0, _react2.storiesOf)('TextInput', module).add('with type password', function () {
    return React.createElement(_TextInput.TextInput, { id: "password", label: "Password", className: textFieldClasses, type: "password", autoComplete: "current-password", margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('with multiline flexible', function () {
    return React.createElement(_TextInput.TextInput, { id: "multiline-flexible", label: "Multiline", multiline: true, rowsMax: "4", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('with multiline static', function () {
    return React.createElement(_TextInput.TextInput, { id: "multiline-flexible", label: "Multiline", multiline: true, numberOfLines: 4, onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('with HelperText', function () {
    return React.createElement(_TextInput.TextInput, { id: "multiline-flexible", label: "Helper Text", helperText: "Some important text", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('with HelperText with node', function () {
    return React.createElement(_TextInput.TextInput, { id: "multiline-flexible", label: "Helper Text", helperText: React.createElement("h1", null, "Node Text"), onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('with placeholder multiline', function () {
    return React.createElement(_TextInput.TextInput, { id: "multiline-flexible", label: "With place holder multiline", placeholder: "Placeholder", multiline: true, onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('editable = false', function () {
    return React.createElement(_TextInput.TextInput, { id: "multiline-flexible", editable: false, label: "With place holder multiline", placeholder: "Placeholder", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('with fullWidth', function () {
    return React.createElement(_TextInput.TextInput, { id: "multiline-flexible", fullWidth: true, editable: true, label: "Full Width", placeholder: "Placeholder", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" });
});
(0, _react2.storiesOf)('TextInput', module).add('with style object', function () {
    return React.createElement(_TextInput.TextInput, { id: "multiline-flexible", style: labelProps, editable: true, label: "Full Width", placeholder: "Placeholder", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" });
});
// storiesOf('textInput', module).add('with type number',
//     () =>  <form ><textInput id="number" value={'4'} type="number" InputLabelProps={labelProps} label="Number" placeholder="Placeholder" multiline onChange={handleTextInputChange} className={textFieldClasses} margin="normal" /></form>);
// storiesOf('textInput', module).add('with type search',
//     () =>  <form ><textInput id="search" type="search" label="Search" placeholder="Placeholder" multiline onChange={handleTextInputChange} className={textFieldClasses} margin="normal" /></form>);
//# sourceMappingURL=TextInput.stories.js.map