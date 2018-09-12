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
const Badge_1 = __importDefault(require("material-ui/Badge"));
class Badge extends React.Component {
    render() {
        return (React.createElement(Badge_1.default, Object.assign({ badgeContent: this.props.badgeContent, classes: Object.assign({}, this.props.style) }, this.props, { color: this.props.color }), this.props.children));
    }
}
exports.default = Badge;
//# sourceMappingURL=Badge.component.js.map