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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const react_1 = __importDefault(require("react"));
const Text = (props) => {
    const { variant } = props, others = __rest(props, ["variant"]);
    const variantType = variant ? variant : 'body1';
    return (react_1.default.createElement(Typography_1.default, Object.assign({ variant: variantType }, others)));
};
exports.default = Text;
//# sourceMappingURL=Text.component.js.map