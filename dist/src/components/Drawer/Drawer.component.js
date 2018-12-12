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
const Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
const styles_1 = require("@material-ui/core/styles");
// export const BlueRainDrawer: React.StatelessComponent<MUIDrawerProperties> = (props) => (
// 	<MUIDrawer children={props.content} {...props}/>
// );
const styles = (theme) => ({
    paparBorder: {
        border: 0,
    }
});
const MUIDrawer = (props) => {
    const { side, tweenDuration, variant } = props, others = __rest(props, ["side", "tweenDuration", "variant"]);
    return (React.createElement(Drawer_1.default, Object.assign({}, others, { anchor: side, classes: { paperAnchorDockedLeft: props.classes.paparBorder,
            paperAnchorDockedRight: props.classes.paparBorder,
            paperAnchorDockedTop: props.classes.paparBorder,
            paperAnchorDockedBottom: props.classes.paparBorder }, transitionDuration: tweenDuration, variant: variant }), props.children));
};
exports.default = styles_1.withStyles(styles)(MUIDrawer);
//# sourceMappingURL=Drawer.component.js.map