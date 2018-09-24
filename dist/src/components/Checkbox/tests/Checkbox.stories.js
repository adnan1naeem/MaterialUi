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
const Checkboxtest_1 = __importDefault(require("./Checkboxtest"));
react_1.storiesOf('Checkbox', module).addDecorator(addon_knobs_1.withKnobs).add('label disabled value props with knobs', () => React.createElement(Checkbox_1.default, { color: "default", disabled: addon_knobs_1.boolean('Disable', false), value: true, onChange: () => addon_actions_1.action('i was presse') }));
react_1.storiesOf('Checkbox', module).add('with onPress', () => React.createElement(Checkbox_1.default, { color: "contrast", onPress: addon_actions_1.action('check changed') }));
react_1.storiesOf('Checkbox', module).add('with label as Node', () => React.createElement(Checkbox_1.default, { label: React.createElement(bluerain_os_1.default.Components.Link, { to: '/', target: "_blank", style: { textDecoration: 'none', color: '#868686', fontWeight: 'bold' } },
        React.createElement(bluerain_os_1.default.Components.Text, null, "Hello")), color: "accent" }));
react_1.storiesOf('Checkbox', module).add('with indeterminate', () => React.createElement(Checkbox_1.default, { color: "primary", indeterminate: true }));
react_1.storiesOf('Checkbox', module).add('with example', () => React.createElement(Checkboxtest_1.default, null));
//# sourceMappingURL=Checkbox.stories.js.map