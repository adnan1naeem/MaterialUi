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
const ListSubheader_1 = __importDefault(require("@material-ui/core/ListSubheader"));
/**
 * The props of ListHeader Component
 * @param {Node} props.children children of ListHeader.
 * @param {Object} props.style style object for ListHeader's style.
 */
const ListHeader = (props) => {
    return (React.createElement(ListSubheader_1.default, Object.assign({}, props), props.children));
};
exports.default = ListHeader;
//# sourceMappingURL=ListHeader.component.js.map