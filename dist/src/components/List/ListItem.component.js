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
const Avatar_1 = require("../Avatar");
const BlueRainListItem = (props) => {
    return (React.createElement(material_ui_1.ListItem, Object.assign({ button: props.active, onClick: props.onPress }, props),
        typeof props.avatar === 'string'
            ?
                React.createElement(Avatar_1.Avatar, { src: props.avatar, size: props.avatarSize ? props.avatarSize : 40 })
            :
                props.avatar,
        (props.primary || props.secondary) ?
            React.createElement(material_ui_1.ListItemText, { primary: props.primary ? props.primary : '', secondary: props.secondary ? props.secondary : '' }) : null,
        props.children ?
            React.createElement(material_ui_1.ListItemText, { primary: props.children })
            : null,
        props.action
            ?
                React.createElement(material_ui_1.ListItemSecondaryAction, null, props.action)
            : null));
};
exports.default = BlueRainListItem;
//# sourceMappingURL=ListItem.component.js.map