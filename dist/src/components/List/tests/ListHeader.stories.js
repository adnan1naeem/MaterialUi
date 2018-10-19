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
const List_1 = require("../../List");
const react_1 = require("@storybook/react");
react_1.storiesOf('ListHeader', module).add('ListHeader with children prop', () => React.createElement(List_1.ListSubheader, null, "ListHeader"));
//# sourceMappingURL=ListHeader.stories.js.map