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
const addon_knobs_1 = require("@storybook/addon-knobs");
const addon_actions_1 = require("@storybook/addon-actions");
const react_1 = require("@storybook/react");
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const Checkbox_1 = __importDefault(require("../../Checkbox"));
react_1.storiesOf('Checkbox', module).addDecorator(addon_knobs_1.withKnobs).add('label disabled value props with knobs', () => React.createElement(Checkbox_1.default, { label: addon_knobs_1.text('Label', 'Label Chekbox'), color: "default", disabled: addon_knobs_1.boolean('Disable', false), value: true, onChange: () => addon_actions_1.action('i was presse') }));
react_1.storiesOf('Checkbox', module).add('with onPress', () => React.createElement(Checkbox_1.default, { label: "with onPress", color: "contrast", value: true, onChange: (event) => {
        console.log(event.target.checked);
        return addon_actions_1.action('i was presse');
    } }));
react_1.storiesOf('Checkbox', module).add('with label as Node', () => React.createElement(Checkbox_1.default, { label: React.createElement(bluerain_os_1.default.Components.Text, null, "I am a text in Node"), color: "accent" }));
react_1.storiesOf('Checkbox', module).add('with indeterminate', () => React.createElement(Checkbox_1.default, { label: React.createElement(bluerain_os_1.default.Components.Text, null, "I am a text in Node"), color: "primary", indeterminate: true }));
//# sourceMappingURL=Checkbox.stories.js.map