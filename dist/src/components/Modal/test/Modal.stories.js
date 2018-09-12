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
const ModalStory_1 = __importDefault(require("./ModalStory"));
const stories = react_1.storiesOf('Modal', module);
stories.add('ModalComponent full width ', () => {
    return React.createElement(ModalStory_1.default, { fullWidth: true });
});
stories.add('ModalComponent fulll screen ', () => {
    return React.createElement(ModalStory_1.default, { fullScreen: true });
});
//# sourceMappingURL=Modal.stories.js.map