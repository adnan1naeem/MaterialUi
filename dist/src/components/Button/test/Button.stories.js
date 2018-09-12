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
const Button_1 = require("../../Button");
const react_1 = require("@storybook/react");
const addon_actions_1 = require("@storybook/addon-actions");
const addon_knobs_1 = require("@storybook/addon-knobs");
react_1.storiesOf('Button', module).addDecorator(addon_knobs_1.withKnobs).add('Primary Button with knobs', () => {
    const label = addon_knobs_1.text('label as child', 'withknobs');
    const color = addon_knobs_1.text('color', 'primary');
    const disabled = addon_knobs_1.boolean('disabled', false);
    const fullWidth = addon_knobs_1.boolean('fullWidth', false);
    const fab = addon_knobs_1.boolean('fab', false);
    const small = addon_knobs_1.boolean('small', false);
    return (React.createElement(Button_1.Button, { color: color, onPress: addon_actions_1.action('I was clicked with knobs'), disabled: disabled, fullWidth: fullWidth, fab: fab, small: small }, label));
});
react_1.storiesOf('Button', module).add('Default Button without Text tag in Child', () => React.createElement(Button_1.Button, { color: 'default' }, "Default"));
react_1.storiesOf('Button', module).add('Default Button with title prop', () => React.createElement(Button_1.Button, { color: 'default', title: "hero" }));
react_1.storiesOf('Button', module).add('Accent Button with style prop', () => React.createElement(Button_1.Button, { color: "accent", style: { backgroundColor: 'purple', borderColor: 'purple' } }, "Custom Purple"));
react_1.storiesOf('Button', module).add('Inherit button with onPress prop', () => React.createElement(Button_1.Button, { color: "inherit", onPress: () => { console.log('I was pressed'); } }, "onPress"));
react_1.storiesOf('Button', module).add('Contrast button with disabled prop true', () => React.createElement(Button_1.Button, { color: "contrast", disabled: true }, "Disabled"));
react_1.storiesOf('Button', module).add('Accent button with href prop', () => React.createElement(Button_1.Button, { color: "accent", href: "https://www.facebook.com" }, "href"));
react_1.storiesOf('Button', module).add('Primary button with onPress prop', () => React.createElement(Button_1.Button, { color: "primary", fullWidth: true }, "FullWidth"));
react_1.storiesOf('Button', module).add('Contrast button with active prop true', () => React.createElement(Button_1.Button, { color: "contrast", active: true }, "Active"));
react_1.storiesOf('Button', module).add('Accent button with bordered prop true', () => React.createElement(Button_1.Button, { color: "accent", bordered: true }, "Bordered"));
react_1.storiesOf('Button', module).add('Accent Rounded Button ', () => React.createElement(Button_1.Button, { color: "accent" }, "Rounded"));
react_1.storiesOf('Button', module).add('Primary button with iconLeft prop', () => React.createElement(Button_1.Button, { color: "primary", iconLeft: React.createElement("img", { src: "https://getbootstrap.com/assets/img/bootstrap-stack.png", width: "15", height: "15" }) }, "Icon Left"));
react_1.storiesOf('Button', module).add('Transparent Button with icon as child', () => React.createElement(Button_1.Button, { style: { backgroundColor: 'transparent', boxShadow: 'none', border: 0 } },
    React.createElement("img", { src: "https://getbootstrap.com/assets/img/bootstrap-stack.png", width: "35", height: "35" })));
react_1.storiesOf('Button', module).add('Contrast button with iconRight prop', () => React.createElement(Button_1.Button, { color: "contrast", iconRight: React.createElement("img", { src: "https://getbootstrap.com/assets/img/bootstrap-stack.png", width: "15", height: "15" }) }, "Icon Right"));
react_1.storiesOf('Button', module).add('Primary button with fab prop', () => React.createElement(Button_1.Button, { color: "primary", fab: true }, "FAB"));
react_1.storiesOf('Button', module).add('Primary button with fab prop and small prop', () => React.createElement(Button_1.Button, { color: "primary", fab: true, small: true }, "sm"));
react_1.storiesOf('Button', module).add('Accent button with large prop true', () => React.createElement(Button_1.Button, { color: "accent", large: true }, "Large"));
react_1.storiesOf('Button', module).add('Default button with small prop true', () => React.createElement(Button_1.Button, { color: "default", small: true }, "Small"));
//# sourceMappingURL=Button.stories.js.map