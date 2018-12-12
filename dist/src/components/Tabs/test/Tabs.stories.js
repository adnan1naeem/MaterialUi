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
const Tabs_container_1 = __importDefault(require("./Tabs.container"));
const react_1 = require("@storybook/react");
const stories = react_1.storiesOf('Tabs', module);
stories.add('Tabs with containner', () => {
    return (React.createElement(Tabs_container_1.default, null));
});
//# sourceMappingURL=Tabs.stories.js.map