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
const Drawer_1 = require("../../Drawer");
const react_1 = require("@storybook/react");
const DrawerTest_component_1 = __importDefault(require("./DrawerTest.component"));
const stories = react_1.storiesOf('Drawer', module);
const AppBarStoriesStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 0
};
stories.add('Drawer open with anchor="right"', () => {
    return (React.createElement(Drawer_1.Drawer, { variant: "persistent", open: true, tweenDuration: 1000, anchor: "right", style: AppBarStoriesStyle },
        React.createElement("div", null, "YOLO")));
});
stories.add('Drawer open with variant="permanent"', () => {
    return (React.createElement(Drawer_1.Drawer, { variant: "permanent", open: true, tweenDuration: 1000, side: "left", style: AppBarStoriesStyle },
        React.createElement("div", null, "YOLO")));
});
stories.add('Permanent Drawer StateFull with changable side', () => {
    return (React.createElement(DrawerTest_component_1.default, { variant: "permanent" }));
});
stories.add('Persistent Drawer StateFull with changable side aswell as open the drawer', () => {
    return (React.createElement(DrawerTest_component_1.default, { variant: "persistent" }));
});
stories.add('Temporary Drawer StateFull with changable side aswell as open the drawer', () => {
    return (React.createElement(DrawerTest_component_1.default, { variant: "temporary" }));
});
//# sourceMappingURL=Drawer.stories.js.map