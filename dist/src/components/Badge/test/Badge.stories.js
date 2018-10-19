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
const Badge_1 = require("../../Badge");
const react_1 = require("@storybook/react");
const Mail_1 = __importDefault(require("@material-ui/icons/Mail"));
const backgroundColor = '#0f0';
const DefaultStyle = { 'background-color': backgroundColor };
const stories = react_1.storiesOf('Badge', module);
stories.addDecorator(addon_knobs_1.withKnobs).add('Badgse (with knobs)', () => {
    const content = addon_knobs_1.text('content', 'abc');
    const Style = addon_knobs_1.object('Style of Badge', DefaultStyle);
    return React.createElement(Badge_1.Badge, { badgeContent: content, style: Style, color: "primary" },
        React.createElement(Mail_1.default, null));
});
stories.add('Badge with color secondary', () => {
    return React.createElement(Badge_1.Badge, { badgeContent: 3, color: "secondary" },
        React.createElement(Mail_1.default, null));
});
stories.addDecorator(addon_knobs_1.withKnobs).add('Badge with  color error', () => {
    return React.createElement(Badge_1.Badge, { badgeContent: 5, color: "error" },
        React.createElement(Mail_1.default, null));
});
//# sourceMappingURL=Badge.stories.js.map