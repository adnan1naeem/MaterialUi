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
const material_ui_1 = require("material-ui");
const material_ui_icons_1 = require("material-ui-icons");
const List_1 = require("../../List");
const react_1 = require("@storybook/react");
react_1.storiesOf('List', module).add('List with style and raised props', () => (React.createElement(List_1.List, { style: { width: '100%', height: 300 }, className: "bg-main" }, "Raised")));
react_1.storiesOf('List', module).add('List of MUI-1', () => (React.createElement(material_ui_1.Paper, null,
    React.createElement(List_1.List, null,
        React.createElement(List_1.ListItem, { active: true, avatar: React.createElement(material_ui_1.ListItemIcon, null,
                React.createElement(material_ui_icons_1.Inbox, null)), primary: "Inbox" }),
        React.createElement(List_1.ListItem, { active: true, avatar: React.createElement(material_ui_1.ListItemIcon, null,
                React.createElement(material_ui_icons_1.Drafts, null)), primary: "Drafts" })),
    React.createElement(material_ui_1.Divider, null),
    React.createElement(List_1.ListItem, { active: true, primary: "Trash", inset: true }),
    React.createElement(List_1.ListItem, { active: true, primary: "Spam", inset: true }))));
react_1.storiesOf('List', module).add('List of MUI-2', () => (React.createElement(material_ui_1.Paper, null,
    React.createElement(List_1.List, null,
        React.createElement(List_1.ListItem, { active: true, avatar: React.createElement(material_ui_1.ListItemIcon, null,
                React.createElement(material_ui_icons_1.Drafts, null)), primary: "Photos", secondary: "Sep 7 ,2018" }),
        React.createElement(List_1.ListItem, { active: true, disabled: true, avatar: React.createElement(material_ui_1.ListItemIcon, null,
                React.createElement(material_ui_icons_1.Drafts, null)), primary: "Work", secondary: "Sep 7 ,2018" })))));
react_1.storiesOf('List', module).add('List of MUI-4', () => (React.createElement(material_ui_1.Paper, null,
    React.createElement(List_1.List, { dense: true, subheader: React.createElement(List_1.ListSubheader, null, "Heading1") },
        React.createElement(List_1.ListItem, { active: true, avatar: React.createElement(material_ui_1.ListItemIcon, null,
                React.createElement(material_ui_icons_1.Drafts, null)), primary: "single-line item", secondary: "Secondary text", action: React.createElement(material_ui_icons_1.Drafts, null) })))));
//# sourceMappingURL=List.stories.js.map