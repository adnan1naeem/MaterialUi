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
const index_1 = require("../index");
const Notification_simple_components_1 = require("./Notification.simple.components");
const react_1 = require("@storybook/react");
// import Button from 'material-ui/Button';
// import CloseIcon from '@material-ui/icons/Close';
// import IconButton from 'material-ui/IconButton';
const Notification_state_component_1 = __importDefault(require("./Notification.state.component"));
const stories = react_1.storiesOf('Notification', module);
stories.add('Notification', () => {
    return (React.createElement(index_1.Notification, { open: () => console.log('open'), onClose: () => console.log('open'), transition: '', SnackbarContentProps: { 'aria-describedby': 'message-id' }, text: React.createElement("span", { id: "message-id" }, "I love snacks") }));
});
stories.add('Postioned snackbar', () => {
    return (React.createElement("div", null,
        React.createElement(Notification_state_component_1.default, null)));
});
stories.add(' SimpleSnackbar ', () => {
    return (React.createElement("div", null,
        React.createElement(Notification_simple_components_1.SimpleSnackbar, null)));
});
//# sourceMappingURL=Notification.stories.js.map