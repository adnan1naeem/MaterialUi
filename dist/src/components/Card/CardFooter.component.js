"use strict";
/**
 * Created by M.GhazanfarAli on 01/04/18.
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Card_1 = require("material-ui/Card");
const BlueRainCardFooter = (props) => {
    return (React.createElement(Card_1.CardActions, Object.assign({}, props), props.children));
};
exports.default = BlueRainCardFooter;
//# sourceMappingURL=CardFooter.component.js.map