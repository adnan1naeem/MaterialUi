"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const __1 = require("../");
const enzyme_1 = require("enzyme");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
test('render correctly', () => {
    const notification = enzyme_1.shallow(react_1.default.createElement(__1.Notification, { open: () => console.log('open'), onClose: () => console.log('open'), transition: '', SnackbarContentProps: { 'aria-describedby': 'message-id' }, text: react_1.default.createElement("span", { id: "message-id" }, "I love snacks") }));
    expect(notification).toBeDefined();
    expect(notification).toMatchSnapshot();
});
//# sourceMappingURL=Notification.test.js.map