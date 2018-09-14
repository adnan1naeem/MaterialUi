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
const AppBar_1 = require("../../AppBar");
const Button_1 = require("../../Button");
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_1 = require("@storybook/react");
const Assignment_1 = __importDefault(require("material-ui-icons/Assignment"));
const material_ui_icons_1 = require("material-ui-icons");
const stories = react_1.storiesOf('AppBar', module);
const AppBarStoriesStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 0
};
stories.addDecorator(addon_knobs_1.withKnobs).add('AppBar with primary color and position="fixed"', () => {
    return (React.createElement(AppBar_1.AppBar, { left: React.createElement(Button_1.Button, { fab: true, style: AppBarStoriesStyle },
            React.createElement(Assignment_1.default, null)), title: addon_knobs_1.text('Title', 'title'), right: React.createElement(Button_1.Button, { color: "primary" }, "Login"), position: "fixed", color: "primary", style: { backgroundColor: 'red' } }));
});
stories.add('AppBar with primary color and  position="absolute"', () => {
    return (React.createElement(AppBar_1.AppBar, { position: "absolute", left: React.createElement(Button_1.Button, { fab: true, style: AppBarStoriesStyle },
            React.createElement(Assignment_1.default, null)), title: 'Title', right: React.createElement(Button_1.Button, { color: "secondary" }, "Login"), color: "primary" }));
});
stories.add('AppBar with accent color', () => {
    return (React.createElement(AppBar_1.AppBar, { color: "accent", left: React.createElement(Button_1.Button, { fab: true, style: AppBarStoriesStyle },
            React.createElement(Assignment_1.default, null)), title: 'Title', right: React.createElement(Button_1.Button, { color: "primary" }, "Login") }));
});
stories.add('AppBar without right prop', () => {
    return (React.createElement(AppBar_1.AppBar, { color: "accent", left: React.createElement(Button_1.Button, { fab: true, style: AppBarStoriesStyle },
            React.createElement(Assignment_1.default, null)), title: 'Title' }));
});
stories.add('AppBar without  left prop', () => {
    return (React.createElement(AppBar_1.AppBar, { color: "accent", title: 'Title', right: React.createElement(Button_1.Button, { color: "primary" }, "Login") }));
});
stories.add('AppBar without title', () => {
    return (React.createElement(AppBar_1.AppBar, { color: "accent", left: React.createElement(Button_1.Button, { fab: true, style: AppBarStoriesStyle },
            React.createElement(Assignment_1.default, null)), right: React.createElement(Button_1.Button, { color: "primary" }, "Login") }));
});
stories.add('AppBar with left ,right and title approach', () => {
    return (React.createElement(AppBar_1.AppBar, { left: React.createElement(Button_1.Button, { transparent: true },
            React.createElement(material_ui_icons_1.ArrowBack, null)), title: "appbar", right: React.createElement(Button_1.Button, { transparent: true }, "Cancel") }));
});
stories.add('AppBar with style object', () => {
    return (React.createElement(AppBar_1.AppBar, { style: { backgroundColor: 'red' } }));
});
stories.add('AppBar with only left node', () => {
    return (React.createElement(AppBar_1.AppBar, { left: React.createElement(Button_1.Button, { transparent: true },
            React.createElement(material_ui_icons_1.ArrowBack, null)) }));
});
stories.add('AppBar with only right node', () => {
    return (React.createElement(AppBar_1.AppBar, { right: React.createElement(Button_1.Button, { transparent: true }, "Cancel") }));
});
stories.add('AppBar with only title', () => {
    return (React.createElement(AppBar_1.AppBar, { title: "appbar" }));
});
//# sourceMappingURL=AppBar.stories.js.map