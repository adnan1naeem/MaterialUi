"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ExpansionPanel_1 = __importDefault(require("@material-ui/core/ExpansionPanel"));
const ExpansionPanelSummary_1 = __importDefault(require("@material-ui/core/ExpansionPanelSummary"));
const ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
const ExpansionPanelComponent = (props) => {
    return (react_1.default.createElement(ExpansionPanel_1.default, Object.assign({}, props),
        react_1.default.createElement(ExpansionPanelSummary_1.default, { expanded: props.collapsed, expandIcon: props.expandIcon }, props.title),
        react_1.default.createElement(ExpansionPanelDetails_1.default, null, props.children)));
};
exports.default = ExpansionPanelComponent;
//# sourceMappingURL=ExpansionPanel.components.js.map