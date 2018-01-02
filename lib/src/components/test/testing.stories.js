"use strict";
/**
 * Created by waheed on 12/27/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const List_1 = require("material-ui/List");
const react_2 = require("@storybook/react");
const stories = react_2.storiesOf('test', module);
stories.add('test', () => (react_1.default.createElement("div", null,
    react_1.default.createElement(List_1.List, null,
        react_1.default.createElement(List_1.ListItem, { primaryText: "Inbox" }),
        react_1.default.createElement(List_1.ListItem, { primaryText: "Starred" }),
        react_1.default.createElement(List_1.ListItem, { primaryText: "Sent mail" }),
        react_1.default.createElement(List_1.ListItem, { primaryText: "Drafts" }),
        react_1.default.createElement(List_1.ListItem, { primaryText: "Inbox" })))));
