"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluerain_os_1 = require("@blueeast/bluerain-os");
const react_1 = __importDefault(require("react"));
const DummyComponent = () => (react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (react_1.default.createElement(BR.Components.Text, null, "I'm a dummy! \uD83E\uDD2A \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"))));
exports.default = DummyComponent;
//# sourceMappingURL=DummyComponent.js.map