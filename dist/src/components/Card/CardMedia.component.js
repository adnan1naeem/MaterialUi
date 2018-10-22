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
const CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
/**
 * The props of CardMedia Component
 * @param {Object} props.style style object for Card's style.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 * @param {number} props.height height of the image.
 */
const BlueRainCardMedia = props => {
    const heightedStyle = Object.assign({}, props.style, { height: props.height || 200 });
    return (React.createElement(CardMedia_1.default, Object.assign({ style: heightedStyle, 
        //  image={props.src}
        src: props.src }, props)));
};
exports.default = BlueRainCardMedia;
//# sourceMappingURL=CardMedia.component.js.map