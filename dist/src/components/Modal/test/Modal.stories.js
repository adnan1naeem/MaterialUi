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
stories.add('ModalComponent maxWidth="xs"', () => {
    return React.createElement(ModalStory_1.default, { maxWidth: "xs" });
});
stories.add('ModalComponent maxWidth="sm"', () => {
    return React.createElement(ModalStory_1.default, { maxWidth: "sm" });
});
stories.add('ModalComponent maxWidth="md"', () => {
    return React.createElement(ModalStory_1.default, { maxWidth: "md" });
});
stories.add('ModalComponent PaperProps={Blob}', () => {
    return React.createElement(ModalStory_1.default, { PaperProps: Blob });
});
stories.add('ModalComponent with  scroll="body" ', () => {
    return React.createElement(ModalStory_1.default, { scroll: "body" });
});
stories.add('ModalComponent with  scroll="paper" ', () => {
    return React.createElement(ModalStory_1.default, { scroll: "paper" });
});
//# sourceMappingURL=Modal.stories.js.map