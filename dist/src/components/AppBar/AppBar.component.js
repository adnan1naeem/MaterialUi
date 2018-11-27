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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const bluerain_os_1 = require("@blueeast/bluerain-os");
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const style_1 = require("./style");
exports.BlueRainAppBar = (props) => {
    const { position, style, titleStyle } = props, others = __rest(props, ["position", "style", "titleStyle"]);
    return (React.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (React.createElement(AppBar_1.default, Object.assign({ position: position }, others, { style: style ? style : { position: 'sticky' } }),
        React.createElement(Toolbar_1.default, null,
            React.createElement(BR.Components.View, { style: style_1.styles.container },
                React.createElement(BR.Components.View, { style: style_1.styles.titleContainer },
                    props.left,
                    React.createElement(Typography_1.default, { variant: "h6", style: titleStyle }, props.title)),
                React.createElement(BR.Components.View, null, props.right)))))));
};
//# sourceMappingURL=AppBar.component.js.map