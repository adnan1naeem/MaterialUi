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
const Avatar_1 = require("../../Avatar");
const react_1 = require("@storybook/react");
const Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
const Folder_1 = __importDefault(require("@material-ui/icons/Folder"));
const Pageview_1 = __importDefault(require("@material-ui/icons/Pageview"));
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const stories = react_1.storiesOf('Avatar', module);
stories.addDecorator(addon_knobs_1.withKnobs).add('Avatar (with knobs)', () => {
    const content = addon_knobs_1.text('content', 'Remy Sharp');
    const colour = addon_knobs_1.text('color', 'green');
    const size = addon_knobs_1.number('size', 400);
    return React.createElement(Avatar_1.Avatar, { alt: content, src: "https://material-ui-next.com/static/images/uxceo-128.jpg", size: size, style: { backgroundColor: colour } });
}).add('Avatar (withOut knobs)', () => {
    return (React.createElement(Avatar_1.Avatar, { alt: "Adelle Charles", src: "https://material-ui-next.com/static/images/uxceo-128.jpg", style: { height: 70, width: 70 } }));
}).add('Avatar with size', () => {
    return (React.createElement(Avatar_1.Avatar, { alt: "Adelle Charles", src: "https://material-ui-next.com/static/images/uxceo-128.jpg", style: { height: 70, width: 70 }, size: 70 }));
}).add('Avatar (with Icons)', () => {
    return (React.createElement("div", { style: { display: 'flex', } },
        React.createElement(Avatar_1.Avatar, { style: { backgroundColor: 'pink' }, size: 40 },
            React.createElement(Folder_1.default, null)),
        React.createElement(Avatar_1.Avatar, { style: { backgroundColor: 'grey' }, size: 40 },
            React.createElement(Pageview_1.default, null)),
        React.createElement(Avatar_1.Avatar, { style: { backgroundColor: 'green' }, size: 40 },
            React.createElement(Menu_1.default, null))));
}).add('Avatar with text', () => {
    return (React.createElement("div", { style: { display: 'flex', } },
        React.createElement(Avatar_1.Avatar, { style: { backgroundColor: 'grey' } },
            React.createElement(bluerain_os_1.default.Components.Text, null, " H")),
        React.createElement(Avatar_1.Avatar, { style: { backgroundColor: 'orange' }, size: 60 },
            React.createElement(bluerain_os_1.default.Components.Text, null, "N")),
        React.createElement(Avatar_1.Avatar, { style: { backgroundColor: 'purple' }, size: 50 },
            React.createElement(bluerain_os_1.default.Components.Text, null, "OP"))));
});
//# sourceMappingURL=Avatar.stories.js.map