"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluerain_os_1 = require("@blueeast/bluerain-os");
const react_1 = __importDefault(require("react"));
const bluerain_storybook_addon_1 = __importDefault(require("@blueeast/bluerain-storybook-addon"));
bluerain_storybook_addon_1.default('BlueRain', module)
    .add('DummyComponent', () => (react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => react_1.default.createElement(BR.Components.DummyComponent, null))));
//# sourceMappingURL=DummyComponent.stories.js.map