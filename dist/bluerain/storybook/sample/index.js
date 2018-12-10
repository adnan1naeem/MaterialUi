"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DummyComponent_1 = __importDefault(require("./DummyComponent"));
class TestPlugin {
}
TestPlugin.pluginName = 'DummyPlugin';
TestPlugin.components = {
    DummyComponent: DummyComponent_1.default,
};
exports.default = TestPlugin;
//# sourceMappingURL=index.js.map