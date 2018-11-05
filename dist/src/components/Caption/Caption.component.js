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
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Caption = props => {
    return (React.createElement(Typography_1.default, { style: props.style, variant: "caption" }));
};
exports.default = Caption;
//# sourceMappingURL=Caption.component.js.map