"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const __1 = require("../");
const react_1 = require("@storybook/react");
function handleTextInputChange(value) {
    console.log('text input value', value.target.value);
}
const labelProps = {
    shrink: true,
    background: 'red'
};
const textFieldClasses = 'margin-left: 100px; margin-right: 100px; width: 50px; background-color: red; padding:100px;';
react_1.storiesOf('TextInput', module).add('with placeholder, default value, onChange, autoComplete, autoFocus', () => React.createElement(__1.TextInput, { label: "haris", placeholder: "hello", onChange: handleTextInputChange, autoComplete: "Hello World !!", autoFocus: true }));
react_1.storiesOf('TextInput', module).add('with id, label, className, onChange, margin', () => React.createElement(__1.TextInput, { id: "name", label: "Name", className: textFieldClasses, onChange: handleTextInputChange, margin: "dense" }));
react_1.storiesOf('TextInput', module).add('with required', () => React.createElement(__1.TextInput, { required: true, id: "required", label: "Required", defaultValue: "Hello World", className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with error true and errorText props', () => React.createElement(__1.TextInput, { error: true, id: "error", label: "Error", defaultValue: "Hello World", className: textFieldClasses, margin: "normal", errorText: 'Oh Noes, Error!!!' }));
react_1.storiesOf('TextInput', module).add('with type password', () => React.createElement(__1.TextInput, { id: "password", label: "Password", className: textFieldClasses, secureTextEntry: true, autoComplete: "current-password", margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with multiline flexible', () => React.createElement(__1.TextInput, { id: "multiline-flexible", label: "Multiline", multiline: true, rowsMax: "4", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with multiline static', () => React.createElement(__1.TextInput, { id: "multiline-flexible", variant: 'outlined', multiline: true, numberOfLines: 4, onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with HelperText', () => React.createElement(__1.TextInput, { id: "multiline-flexible", label: "Helper Text", helperText: "Some important text", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with HelperText with node', () => React.createElement(__1.TextInput, { id: "multiline-flexible", label: "Helper Text", helperText: React.createElement("h1", null, "Node Text"), onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with placeholder multiline', () => React.createElement(__1.TextInput, { id: "multiline-flexible", v: true, label: "With place holder multiline", placeholder: "Placeholder", multiline: true, onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('editable = false', () => React.createElement(__1.TextInput, { id: "multiline-flexible", editable: false, label: "With place holder multiline", placeholder: "Placeholder", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with fullWidth', () => React.createElement(__1.TextInput, { id: "multiline-flexible", fullWidth: true, editable: true, label: "Full Width", placeholder: "Placeholder", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with style object', () => React.createElement(__1.TextInput, { id: "multiline-flexible", style: labelProps, variant: "outlined", editable: true, label: "Full Width", placeholder: "Placeholder", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with type date', () => React.createElement(__1.TextInput, { id: "multiline-flexible", style: labelProps, editable: true, placeholder: "Placeholder", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
react_1.storiesOf('TextInput', module).add('with type d]]ate', () => React.createElement(__1.TextInput, { id: "multiline-flexible", style: labelProps, type: "date", editable: true, label: "Full Width", placeholder: "Placeholder", onChange: handleTextInputChange, className: textFieldClasses, margin: "normal" }));
// storiesOf('textInput', module).add('with type number',
//     () =>  <form ><textInput id="number" value={'4'} type="number" InputLabelProps={labelProps} label="Number" placeholder="Placeholder" multiline onChange={handleTextInputChange} className={textFieldClasses} margin="normal" /></form>);
// storiesOf('textInput', module).add('with type search',
//     () =>  <form ><textInput id="search" type="search" label="Search" placeholder="Placeholder" multiline onChange={handleTextInputChange} className={textFieldClasses} margin="normal" /></form>);
//# sourceMappingURL=TextInput.stories.js.map