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
const Inbox_1 = __importDefault(require("@material-ui/icons/Inbox"));
const Drafts_1 = __importDefault(require("@material-ui/icons/Drafts"));
const Divider_1 = __importDefault(require("@material-ui/core/Divider"));
const ListItemIcon_1 = __importDefault(require("@material-ui/core/ListItemIcon"));
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const List_1 = require("../../List");
const react_1 = require("@storybook/react");
react_1.storiesOf('List', module).add('List with style and raised props', () => (React.createElement(List_1.List, { style: { width: '100%', height: 300 }, className: "bg-main" }, "Raised")));
react_1.storiesOf('List', module).add('List of MUI-1', () => (React.createElement(Paper_1.default, null,
    React.createElement(List_1.List, null,
        React.createElement(List_1.ListItem, { active: true, avatar: React.createElement(ListItemIcon_1.default, null,
                React.createElement(Inbox_1.default, null)), primary: "Inbox" }),
        React.createElement(List_1.ListItem, { active: true, avatar: React.createElement(ListItemIcon_1.default, null,
                React.createElement(Drafts_1.default, null)), primary: "Drafts" })),
    React.createElement(Divider_1.default, null),
    React.createElement(List_1.ListItem, { active: true, primary: "Trash", inset: true }),
    React.createElement(List_1.ListItem, { active: true, primary: "Spam", inset: true }))));
react_1.storiesOf('List', module).add('List of MUI-2', () => (React.createElement(Paper_1.default, null,
    React.createElement(List_1.List, null,
        React.createElement(List_1.ListItem, { active: true, avatar: React.createElement(ListItemIcon_1.default, null,
                React.createElement(Drafts_1.default, null)), primary: "Photos", secondary: "Sep 7 ,2018" }),
        React.createElement(List_1.ListItem, { active: true, disabled: true, avatar: React.createElement(ListItemIcon_1.default, null,
                React.createElement(Drafts_1.default, null)), primary: "Work", secondary: "Sep 7 ,2018" })))));
react_1.storiesOf('List', module).add('List of MUI-4', () => (React.createElement(Paper_1.default, null,
    React.createElement(List_1.List, { dense: true, subheader: React.createElement(List_1.ListSubheader, null, "Heading1") },
        React.createElement(List_1.ListItem, { active: true, avatar: React.createElement(ListItemIcon_1.default, null,
                React.createElement(Drafts_1.default, null)), primary: "single-line item", secondary: "Secondary text", action: React.createElement(Drafts_1.default, null) })))));
//# sourceMappingURL=List.stories.js.map