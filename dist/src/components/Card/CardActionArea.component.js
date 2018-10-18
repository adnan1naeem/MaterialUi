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
const CardActionArea_1 = __importDefault(require("@material-ui/core/CardActionArea"));
const BlueRainCardActionArea = props => {
    return React.createElement(CardActionArea_1.default, Object.assign({}, props), props.children);
};
exports.default = BlueRainCardActionArea;
//# sourceMappingURL=CardActionArea.component.js.map