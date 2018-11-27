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
const ExpansionPanel_components_1 = require("../ExpansionPanel.components");
const react_1 = require("@storybook/react");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
const stories = react_1.storiesOf('ExpansionPanelComponent', module);
stories.add('with all props', () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(ExpansionPanel_components_1.ExpansionPanelComponent, { title: 'brand', expandIcon: React.createElement(ExpandMore_1.default, null) },
            React.createElement(Typography_1.default, null, "Here will be the render list component")),
        React.createElement(ExpansionPanel_components_1.ExpansionPanelComponent, { title: 'brand', expandIcon: React.createElement(ExpandMore_1.default, null) },
            React.createElement(Typography_1.default, null, "Here will be the render list component"))));
});
//# sourceMappingURL=ExpansionPanel.stories.js.map