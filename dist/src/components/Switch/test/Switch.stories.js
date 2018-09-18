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
const addon_knobs_1 = require("@storybook/addon-knobs");
const Switch_1 = require("../../Switch");
const addon_actions_1 = require("@storybook/addon-actions");
const react_1 = require("@storybook/react");
const stories = react_1.storiesOf('Switch', module);
stories.addDecorator(addon_knobs_1.withKnobs).add('Switch (with knobs)', () => {
    const disabled = addon_knobs_1.boolean('disabled', false);
    const value = addon_knobs_1.boolean('value', true);
    return React.createElement(Switch_1.Switch, { disabled: disabled, onChange: addon_actions_1.action('Value is changed'), checked: value });
});
stories.add('Switch (default)', () => {
    return (React.createElement(Switch_1.Switch, null));
});
stories.add('Switch (MUI specific props)', () => {
    return (React.createElement("div", { style: { display: 'flex', } },
        React.createElement(Switch_1.Switch, { "aria-label": "checkedD" }),
        React.createElement(Switch_1.Switch, { value: true, onChange: addon_actions_1.action('Value is changed!'), "aria-label": "checkedD", muValue: "Switch" })));
});
//# sourceMappingURL=Switch.stories.js.map