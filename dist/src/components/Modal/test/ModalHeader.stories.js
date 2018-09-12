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
const react_1 = require("@storybook/react");
const ModalHeader_Component_1 = __importDefault(require("../ModalHeader.Component"));
const stories = react_1.storiesOf('Modal', module);
stories.add('ModalHeader', () => {
    return (React.createElement(ModalHeader_Component_1.default, null, "UserLocation Service"));
});
//# sourceMappingURL=ModalHeader.stories.js.map