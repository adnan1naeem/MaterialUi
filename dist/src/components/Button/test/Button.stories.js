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
const Button_1 = require("../../Button");
const react_1 = require("@storybook/react");
const addon_actions_1 = require("@storybook/addon-actions");
const addon_knobs_1 = require("@storybook/addon-knobs");
const Add_1 = __importDefault(require("@material-ui/icons/Add"));
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const Icon_1 = __importDefault(require("@material-ui/core/Icon"));
const Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
const Navigation_1 = __importDefault(require("@material-ui/icons/Navigation"));
react_1.storiesOf('Button', module).addDecorator(addon_knobs_1.withKnobs).add('Primary Button with knobs', () => {
    const label = addon_knobs_1.text('label as child', 'withknobs');
    const disabled = addon_knobs_1.boolean('disabled', false);
    const fullWidth = addon_knobs_1.boolean('fullWidth', false);
    const fab = addon_knobs_1.boolean('fab', false);
    const small = addon_knobs_1.boolean('small', false);
    return (React.createElement(Button_1.Button
    // color={color}
    , { 
        // color={color}
        onPress: addon_actions_1.action('I was clicked with knobs'), disabled: disabled, fullWidth: fullWidth, fab: fab, small: small, variant: 'contained' }, label));
});
react_1.storiesOf('Button', module).add('Default Button without Text tag in Child', () => React.createElement(Button_1.Button, { color: 'default' }, "Default"));
react_1.storiesOf('Button', module).add('Default Button with title prop', () => React.createElement(Button_1.Button, { color: 'default', title: "hero" }));
react_1.storiesOf('Button', module).add('Button with style prop', () => React.createElement(Button_1.Button, { color: "primary", style: { backgroundColor: 'purple', borderColor: 'purple' } }, "Custom Purple"));
react_1.storiesOf('Button', module).add('Button with onPress prop', () => React.createElement(Button_1.Button, { color: "inherit", onPress: () => { console.log('I was pressed'); } }, "onPress"));
react_1.storiesOf('Button', module).add('Button with disabled prop true', () => React.createElement(Button_1.Button, { disabled: true }, "Disabled"));
react_1.storiesOf('Button', module).add('Button with href prop', () => React.createElement(Button_1.Button, { href: "https://www.facebook.com" }, "href"));
react_1.storiesOf('Button', module).add('Primary Button with onPress prop', () => React.createElement(Button_1.Button, { variant: 'contained', color: "primary", fullWidth: true }, "FullWidth"));
react_1.storiesOf('Button', module).add('Button with active prop true', () => React.createElement(Button_1.Button, { active: true }, "Active"));
react_1.storiesOf('Button', module).add('Accent button with bordered prop true', () => React.createElement(Button_1.Button, { bordered: true }, "Bordered"));
react_1.storiesOf('Button', module).add('Primary button with iconLeft prop', () => React.createElement(Button_1.Button, { color: "primary", iconLeft: React.createElement(Add_1.default, null) }, "Icon Left"));
react_1.storiesOf('Button', module).add('Transparent Button with icon as child', () => React.createElement(Button_1.Button, { style: { backgroundColor: 'transparent', boxShadow: 'none', border: 0 } },
    React.createElement(Add_1.default, null)));
react_1.storiesOf('Button', module).add('Contrast button with iconRight prop', () => React.createElement(Button_1.Button, { color: 'primary', iconRight: React.createElement(Add_1.default, null) }, "Icon Right"));
react_1.storiesOf('Button', module).add('Primary button with round prop and small prop', () => React.createElement(Button_1.Button, { color: "primary", rounded: true, small: true }, "sm"));
react_1.storiesOf('Button', module).add('Accent button with large prop true', () => React.createElement(Button_1.Button, { color: "primary", variant: 'contained', large: true }, "Large"));
react_1.storiesOf('Button', module).add('Text Buttons', () => {
    return (React.createElement(bluerain_os_1.default.Components.View, { style: { disply: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' } },
        React.createElement(Button_1.Button, null, "Default"),
        React.createElement(Button_1.Button, { color: "primary" }, "Primary"),
        React.createElement(Button_1.Button, { color: "secondary" }, "Secondary"),
        React.createElement(Button_1.Button, { disabled: true }, "Disabled"),
        React.createElement(Button_1.Button, { href: "#text-buttons" }, "Link")));
});
react_1.storiesOf('Button', module).add('Outlined Button', () => {
    return (React.createElement(bluerain_os_1.default.Components.View, { style: { disply: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' } },
        React.createElement(Button_1.Button, { variant: "outlined" }, "Default"),
        React.createElement(Button_1.Button, { variant: "outlined", color: "primary" }, "Primary"),
        React.createElement(Button_1.Button, { variant: "outlined", color: "secondary" }, "Secondary"),
        React.createElement(Button_1.Button, { variant: "outlined", disabled: true }, "Disabled"),
        React.createElement(Button_1.Button, { variant: "outlined", href: "#outlined-buttons" }, "Link")));
});
react_1.storiesOf('Button', module).add('Contained Button', () => {
    return (React.createElement(bluerain_os_1.default.Components.View, { style: { disply: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' } },
        React.createElement(Button_1.Button, { variant: "contained" }, "Default"),
        React.createElement(Button_1.Button, { variant: "contained", color: "primary" }, "Primary"),
        React.createElement(Button_1.Button, { variant: "contained", color: "secondary" }, "Secondary"),
        React.createElement(Button_1.Button, { variant: "contained", color: "secondary", disabled: true }, "Disabled"),
        React.createElement(Button_1.Button, { variant: "contained", href: "#contained-buttons" }, "Link")));
});
react_1.storiesOf('Button', module).add('Floating Action Buttons', () => {
    return (React.createElement(bluerain_os_1.default.Components.View, { style: { disply: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' } },
        React.createElement(Button_1.Button, { variant: "fab", color: "primary", "aria-label": "Add" },
            React.createElement(Add_1.default, null)),
        React.createElement(Button_1.Button, { variant: "fab", color: "secondary", "aria-label": "Edit" },
            React.createElement(Icon_1.default, null, "edit_icon")),
        React.createElement(Button_1.Button, { variant: "extendedFab", "aria-label": "Delete" },
            React.createElement(Navigation_1.default, { style: { marginRight: 8 } }),
            "Extended"),
        React.createElement(Button_1.Button, { variant: "fab", disabled: true, "aria-label": "Delete" },
            React.createElement(Delete_1.default, null))));
});
react_1.storiesOf('Button', module).add('Sizes Buttons', () => {
    return (React.createElement(bluerain_os_1.default.Components.View, { style: { display: 'flex', flexDirection: 'column', backgroundColor: 'white' } },
        React.createElement(bluerain_os_1.default.Components.View, { style: { disply: 'flex', flexDirection: 'row', justifyContent: 'space-between' } },
            React.createElement(Button_1.Button, { size: "small" }, "Small"),
            React.createElement(Button_1.Button, { size: "medium" }, "Medium"),
            React.createElement(Button_1.Button, { size: "large" }, "Large")),
        React.createElement(bluerain_os_1.default.Components.View, { style: { disply: 'flex', flexDirection: 'row', justifyContent: 'space-between' } },
            React.createElement(Button_1.Button, { variant: "outlined", size: "small", color: "primary" }, "Small"),
            React.createElement(Button_1.Button, { variant: "outlined", size: "medium", color: "primary" }, "Medium"),
            React.createElement(Button_1.Button, { variant: "outlined", size: "large", color: "primary" }, "Large")),
        React.createElement(bluerain_os_1.default.Components.View, { style: { disply: 'flex', flexDirection: 'row', justifyContent: 'space-between' } },
            React.createElement(Button_1.Button, { variant: "contained", size: "small", color: "primary" }, "Small"),
            React.createElement(Button_1.Button, { variant: "contained", size: "medium", color: "primary" }, "Medium"),
            React.createElement(Button_1.Button, { variant: "contained", size: "large", color: "primary" }, "Large")),
        React.createElement(bluerain_os_1.default.Components.View, { style: { disply: 'flex', flexDirection: 'row', justifyContent: 'space-between' } },
            React.createElement(Button_1.Button, { variant: "fab", mini: true, color: "secondary", "aria-label": "Add" },
                React.createElement(Add_1.default, null)),
            React.createElement(Button_1.Button, { variant: "fab", color: "secondary", "aria-label": "Add" },
                React.createElement(Add_1.default, null)))));
});
//# sourceMappingURL=Button.stories.js.map