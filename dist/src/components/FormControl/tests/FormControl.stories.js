"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FormControl_1 = require("../../FormControl");
const FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
const TextInput_1 = require("../../TextInput");
const react_1 = require("@storybook/react");
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
react_1.storiesOf('FormControl', module).add('FormControl with style and raised props', () => (React.createElement(FormControl_1.FormControl, { style: { width: '100%', height: 300 }, className: "bg-main" }, "Raised")));
react_1.storiesOf('FormControl', module).add('MaterialUI example 1', () => (React.createElement(Paper_1.default, { style: { padding: 20 } },
    React.createElement(FormControl_1.FormControl, { fullWidth: true },
        React.createElement(TextInput_1.TextInput, { label: "amount", id: "adornment-amount" })))));
react_1.storiesOf('FormControl', module).add('MaterialUI example 2', () => (React.createElement(Paper_1.default, { style: { padding: 20 } },
    React.createElement(FormControl_1.FormControl, null,
        React.createElement(FormControl_1.FormGroup, null,
            React.createElement(TextInput_1.TextInput, { label: "Input with success" }),
            React.createElement(bluerain_os_1.default.Components.Text, null, "Example help text that remains unchanged.")),
        React.createElement(FormControl_1.FormGroup, null,
            React.createElement(TextInput_1.TextInput, { label: "Input with danger", error: true, errorText: 'Example help text that remains unchanged.' }))))));
react_1.storiesOf('FormControl', module).add('MaterialUI example 3', () => (React.createElement(Paper_1.default, { style: { padding: 20 } },
    React.createElement(FormControl_1.FormGroup, { row: true },
        React.createElement(FormControlLabel_1.default, { control: React.createElement(Checkbox_1.default, { value: "checkedA" }), label: "Option A" }),
        React.createElement(FormControlLabel_1.default, { control: React.createElement(Checkbox_1.default, { value: "checkedB" }), label: "Option B" }),
        React.createElement(FormControlLabel_1.default, { control: React.createElement(Checkbox_1.default, { value: "checkedC" }), label: "Option C" }),
        React.createElement(FormControlLabel_1.default, { disabled: true, control: React.createElement(Checkbox_1.default, { value: "checkedD" }), label: "Disabled" }),
        React.createElement(FormControlLabel_1.default, { disabled: true, control: React.createElement(Checkbox_1.default, { checked: true, value: "checkedE" }), label: "Disabled" }),
        React.createElement(FormControlLabel_1.default, { control: React.createElement(Checkbox_1.default, { value: "checkedF", indeterminate: true }), label: "Indeterminate" }),
        React.createElement(FormControlLabel_1.default, { control: React.createElement(Checkbox_1.default, { value: "checkedG" }), label: "Custom color" })))));
//# sourceMappingURL=FormControl.stories.js.map