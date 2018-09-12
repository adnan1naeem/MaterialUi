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
/**
 * The props of ListHeader Component
 * @param {Node} props.children children of ListHeader.
 * @param {Object} props.style style object for ListHeader's style.
 */
const ListHeader = (props) => {
    return (React.createElement(material_ui_1.ListSubheader, Object.assign({}, props), props.children));
};
exports.default = ListHeader;
//# sourceMappingURL=ListHeader.component.js.map