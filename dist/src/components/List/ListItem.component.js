"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
    const { active, onPress } = props, others = __rest(props, ["active", "onPress"]);
    return (React.createElement(material_ui_1.ListItem, Object.assign({ button: active, onClick: onPress }, others),
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
                React.createElement("div", null, props.action)
            : null));
};
exports.default = BlueRainListItem;
//# sourceMappingURL=ListItem.component.js.map